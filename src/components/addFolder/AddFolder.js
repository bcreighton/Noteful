import React, { Component } from 'react'

const Required = () => {
  <span className='AddFolderRequired'>*</span>
}

class AddFolder extends Component {
  state = {
    error: null,
  }

  handleSubmit = (e) => {
    e.preventDefault()

    fetch('http://localhost:9090/folders')
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status)
        }
        return res.json()
      })
      .then(this.setFolders)
      .catch(error => this.setState({ error }))
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
          <label htmlFor='folderName'>
            Folder Name
              {' '}
            <Required />
          </label>
          <input
            type='text'
            name='folderName'
            id='folderName'
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