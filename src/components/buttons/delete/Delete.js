import React, { Component } from 'react'
import NotefulContext from '../../../NotefulContext'
import '../Button.css'
import './Delete.css'

class Delete extends Component {

  deleteNoteRequest(noteId, cb, history) {
    fetch(`http://localhost:9090/notes/${noteId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(res => {
        if (!res.ok) {
          // handle error
          throw new Error(res.status)
        }
        return res.json()
      })
      .then(data => {
        cb(noteId, history)
      })
      .catch(error => {
        this.setState({
          error,
        })
      })
  }

  render() {
    return (
      <NotefulContext.Consumer>
        {(context) => (
          <button
            id='delete'
            className='btn deleteBTN'
            onClick={() => {
              this.deleteNoteRequest(
                this.props.id,
                context.deleteNote,
                this.props.history,
              )
            }}
          >
            Delete
          </button>
        )}
      </NotefulContext.Consumer>
    )
  }
}

export default Delete