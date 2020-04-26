import React, { Component } from 'react'
import NotefulContext from '../../../NotefulContext'
import '../Button.css'
import './Delete.css'

class Delete extends Component {
  static contextType = NotefulContext;

  deleteNoteRequest() {
    console.log('clicked')
  }

  render() {
    return (
      <NotefulContext.Consumer>
        {(context) => (
          <button
            id='delete'
            className='btn deleteBTN'
            onClick={(props) => {
              this.deleteNoteRequest(
                props.id,
                context.deleteNote,
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