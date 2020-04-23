import React, { Component } from 'react'
import NoteListItem from '../noteListItem/NoteListItem'
import AddNote from '../buttons/addNote/AddNote'
import './NoteList.css'

export default class NoteList extends Component {

  render() {

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
        {noteListItems}
        <AddNote />
      </>
    )
  }
}