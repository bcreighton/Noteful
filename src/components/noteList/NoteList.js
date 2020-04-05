import React, { Component } from 'react'
import NoteListItem from '../noteListItem/NoteListItem'
import AddNote from '../buttons/addNote/AddNote'
import './NoteList.css'

export default class Main extends Component {
  render() {
    return (
      <>
        <NoteListItem />
        <AddNote />
      </>
    )
  }
}