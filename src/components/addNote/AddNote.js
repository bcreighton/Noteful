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

  updateNoteTitle(folder) {
    this.setState({
      noteFolder: {
        value: folder,
        touched: true,
      }
    })
  }

  updateNoteTitle(content) {
    this.setState({
      noteContent: {
        value: content,
        touched: true,
      }
    })
  }

  render() {
    const noteTitleError = '';
    const { error } = this.state;

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
        <div>
          <label htmlFor='noteFolder'>
            Note Folder
              {' '}
            <Required />
          </label>
          <input
            type='text'
            name='noteFolder'
            id='noteFolder'
            placeholder='New Note'
            onChange={e => this.updateFolderName(e.target.value)}
            required
          />
          {/* {this.state.noteFolder.touched && (
            <ValidationError message={noteFolderError} />
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