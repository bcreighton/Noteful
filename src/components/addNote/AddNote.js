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
    noteName: {
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

  render() {
    const noteNameError = '';
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
          <label htmlFor='noteName'>
            Note Name
              {' '}
            <Required />
          </label>
          <input
            type='text'
            name='noteName'
            id='noteName'
            placeholder='New Note'
            onChange={e => this.updateNoteName(e.target.value)}
            required
          />
          {this.state.NoteName.touched && (
            <ValidationError message={noteNameError} />
          )}
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
            onChange={e => this.updateNoteName(e.target.value)}
            required
          />
          {this.state.NoteName.touched && (
            <ValidationError message={noteNameError} />
          )}
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
            onChange={e => this.updateNoteName(e.target.value)}
            required
          />
          {this.state.NoteName.touched && (
            <ValidationError message={noteNameError} />
          )}
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