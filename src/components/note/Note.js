import React, { Component } from 'react'
import NotefulContext from '../../NotefulContext'
import ModDate from '../modDate/ModDate'
import DeleteBTN from '../buttons/delete/DeleteBTN'
import NoteContent from '../noteContent/NoteContent'
import NoteError from '../NoteError'
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
        <NoteError>
          <div className='noteHeader'>
            <h2 className='noteTitle'>{selectedNote.name}</h2>
            <ModDate date={selectedNote.modified} />
            <DeleteBTN id={selectedNote.id} history={this.props.history} />
          </div>
          <NoteContent content={selectedNote.content} />
        </NoteError>
      </>
    )
  }
}

export default Note