import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import ModDate from '../modDate/ModDate'
import Delete from '../buttons/delete/Delete'
import NoteContent from '../noteContent/NoteContent'
import './Note.css'

class Note extends Component {

  getNote() {
    return this.props.notes.find(note => note.id === this.props.match.params.noteId)
  }

  render() {
    const selectedNote = this.getNote()
    return (
      <>
        <div className='noteHeader'>
          <h2 className='noteTitle'>{selectedNote.name}</h2>
          <ModDate date={selectedNote.modified} />
          <Delete id={selectedNote.id} />
        </div>
        <NoteContent content={selectedNote.content} />
      </>
    )
  }
}

export default withRouter(Note)