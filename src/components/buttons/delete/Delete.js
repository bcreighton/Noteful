import React, { Component } from 'react'
import NotefulContext from '../../../NotefulContext'
import '../Button.css'
import './Delete.css'

class Delete extends Component {
  static contextType = NotefulContext;

  render() {
    return (
      // New refactored code using context
      /* 
      <NotefulContext.Consumer>
        {(context) => (
          <button 
            id='delete'
            className='btn deleteBTN'
            onClick={() => {
              deleteNoteRequest(
                props.id,
                context.deleteNote,
              )
            }}
          >
          Delete
          </button> 
        )}
      </NotefulContext.Consumer>
      */
      <button id='delete' className='btn deleteBTN'>Delete</button>
    )
  }
}

export default Delete