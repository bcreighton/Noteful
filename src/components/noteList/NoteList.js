import React, { Component } from 'react'
import NotefulContext from '../../NotefulContext'
import NoteListItem from '../noteListItem/NoteListItem'
import AddNoteBTN from '../buttons/addNoteBTN/AddNoteBTN'
import './NoteList.css'

export default class NoteList extends Component {
  static contextType = NotefulContext;

  getNotesById() {
    return this.context.notes.filter(note => {
      return (
        note.folderId === this.props.folderId
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
      this.props.folderId === undefined
        ? this.context.notes
        : this.getNotesById()

    return (
      <>
        {this.generateNotesList(noteListItems)}
        <AddNoteBTN />
      </>
    )
  }
}