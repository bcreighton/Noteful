import React, { Component } from 'react'
import NotefulContext from '../../NotefulContext'
import ModDate from '../modDate/ModDate'
import Delete from '../buttons/delete/Delete'
import NoteContent from '../noteContent/NoteContent'
import './Note.css'

class Note extends Component {
  static contextType = NotefulContext;

  getNote() {
    return this.context.notes.find(note => note.id === this.props.match.params.noteId) || {};
  }

  render() {
    const selectedNote = this.getNote()
    return (
      <>
        <div className='noteHeader'>
          <h2 className='noteTitle'>{selectedNote.name}</h2>
          <ModDate date={selectedNote.modified} />
          <Delete id={selectedNote.id} history={this.props.history} />
        </div>
        <NoteContent content={selectedNote.content} />
      </>
    )
  }
}

export default Note