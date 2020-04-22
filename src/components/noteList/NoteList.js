import React, { Component } from 'react'
import NotefulContext from '../../NotefulContext'
import NoteListItem from '../noteListItem/NoteListItem'
import AddNote from '../buttons/addNote/AddNote'
import './NoteList.css'

export default class NoteList extends Component {
  static contextType = NotefulContext;

  // Refactored code using context
  /* 
  getNotesById() {
    return this.context.notes.filter(note => note.folderId === this.context.match.params.folderId);
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
  */

  render() {
    /* 
    const noteListItems = this.context.match.params.folderId
      ? this.getNotesById()
      : this.context.notes
    */
    const noteListItems = this.props.notes.map(note => (
      <NoteListItem
        key={note.id}
        id={note.id}
        folderId={note.folderId}
        title={note.name}
        modDate={note.modified}
        content={note.content}
      />
    ))

    return (
      <>
        {/* {this.generateNotesList(noteListItems)} */}
        {noteListItems}
        <AddNote />
      </>
    )
  }
}