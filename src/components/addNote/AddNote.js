import React, { Component } from 'react'
import ValidationError from '../ValidationError'
import NotefulContext from '../../NotefulContext'

const Required = () => (
  <span className='AddFolderRequired'>*</span>
)

class AddNote extends Component {
  static contextType = NotefulContext;

  state = {
    error: null,
    noteTitle: {
      value: '',
      touched: false,
    },
    noteFolder: {
      value: '',
      touched: false,
    },
    noteContent: {
      value: '',
      touched: false,
    },
  }

  updateNoteTitle(title) {
    this.setState({
      noteTitle: {
        value: title,
        touched: true,
      }
    })
  }

  updateNoteFolder(folder) {
    this.setState({
      noteFolder: {
        value: folder,
        touched: true,
      }
    })
  }

  updateNoteContent(content) {
    this.setState({
      noteContent: {
        value: content,
        touched: true,
      }
    })
  }

  generateFolderDDList = () => {
    return this.context.folders.map(folder => (
      <option
        key={folder.id}
        value={folder.name}
      >
        {folder.name}
      </option>
    ))
  }

  getFolderId = (noteFolder) => {
    debugger
    return this.context.folders.find(folder => {
      return noteFolder === folder.name && folder.id
    })
  }

  getCurrentDateTime = () => {
    const today = new Date();
    const date = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
    const time = ('0' + today.getHours()).slice(-2) + ":" + ('0' + today.getMinutes()).slice(-2) + ":" + ('0' + today.getSeconds()).slice(-2) + ':' + ('0' + today.getMilliseconds()).slice(-3);
    const dateTime = date + 'T' + time + 'Z';
    return dateTime
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { noteTitle, noteFolder, noteContent } = e.target
    const note = {
      content: noteContent.value,
      folderId: this.getFolderId(noteFolder.value).id,
      id: this.context.generateId(),
      modified: this.getCurrentDateTime(),
      name: noteTitle.value,
    }
    debugger

    fetch('http://localhost:9090/notes', {
      method: 'POST',
      body: JSON.stringify(note),
      headers: {
        'content-type': 'application/json',
      }
    })
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status)
        }
        return res.json()
      })
      .then(data => {
        noteTitle.value = ''
        noteContent.value = ''

        this.context.addNote(data)
        this.props.history.push('/')
      })
      .catch(error => this.setState({ error }))
  }

  handleClickCancel = () => {
    this.props.history.push('/')
  }

  render() {
    const noteTitleError = '';
    const { error } = this.state;
    const folderList = this.generateFolderDDList();

    return (
      <form
        className='AddNoteForm'
        onSubmit={this.handleSubmit}
      >
        <div className='AddNoteError' role='alert'>
          {error && <p>{error.message}</p>}
        </div>
        <div>
          <label htmlFor='noteTitle'>
            Note Title
              {' '}
            <Required />
          </label>
          <input
            type='text'
            name='noteTitle'
            id='noteTitle'
            placeholder='New Note'
            onChange={e => this.updateNoteTitle(e.target.value)}
            required
          />
          {/* {this.state.noteTitle.touched && (
            <ValidationError message={noteTitleError} />
          )} */}
        </div>
        <div>
          <label htmlFor='noteFolder'>
            Note Folder
              {' '}
            <Required />
          </label>
          <select
            id='noteFolder'
            name='noteFolder'
            onChange={e => this.updateNoteFolder(e.target.value)}
            required
          >
            {folderList}
          </select>
          {/* {this.state.noteFolder.touched && (
            <ValidationError message={noteFolderError} />
          )} */}
        </div>
        <div>
          <label htmlFor='noteContent'>
            Content
              {' '}
            <Required />
          </label>
          <input
            type='text'
            name='noteContent'
            id='noteContent'
            placeholder="What is your note's content?"
            onChange={e => this.updateNoteContent(e.target.value)}
            required
          />
          {/* {this.state.noteContent.touched && (
            <ValidationError message={noteContentError} />
          )} */}
        </div>
        <div className='AddNoteButtons'>
          <button type='button' onClick={this.handleClickCancel}>
            Cancel
            </button>
          {' '}
          <button type='submit'>
            Save
            </button>
        </div>
      </form>
    )
  }
}

export default AddNote;