import React, { Component } from 'react'

const Required = () => {
  <span className='AddFolderRequired'>*</span>
}

class AddFolder extends Component {
  state = {
    error: null,
  }

  handleClickCancel = () => {
    this.props.history.push('/')
  }

  render() {
    return (
      <form
        className='AddFolderForm'
        onSubmit={this.handleSubmit}
      >
        <div className='AddFolderError' role='alert'>
          {error && <p>{error.message}</p>}
        </div>
        <div>
          <label htmlFor='title'>
            Title
              {' '}
            <Required />
          </label>
          <input
            type='text'
            name='title'
            id='title'
            placeholder='New Folder'
            required
          />
        </div>
        <div className='AddFolderButtons'>
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

export default AddFolder;