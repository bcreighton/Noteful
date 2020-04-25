import React, { Component } from 'react'
import NotefulContext from '../../NotefulContext'
import NoteListItem from '../noteListItem/NoteListItem'
import AddNote from '../buttons/addNote/AddNote'
import './NoteList.css'

export default class NoteList extends Component {
  static contextType = NotefulContext;

  getNotesById() {
    return this.context.notes.filter(note => {
      return (
        note.folderId === this.props.match.params.folderId
      )
    });
  }

  generateNotesList(notes) {
    return notes.map(note => (
      <NoteListItem
        key={note.id}
        id={note.id}
        folderId={note.folderId}
        title={note.name}
        modDate={note.modified}
        content={note.content}
      />
    ))
  }

  render() {
    const noteListItems =
      this.props.match === undefined
        ? this.context.notes
        : this.props.match.params.folderId !== undefined
          ? this.getNotesById()
          : this.context.notes
    return (
      <>
        {this.generateNotesList(noteListItems)}
        <AddNote />
      </>
    )
  }
}