import React, { Component } from 'react'
import ModDate from '../modDate/ModDate'
import Delete from '../buttons/delete/Delete'
import NoteContent from '../noteContent/NoteContent'
import './Note.css'

export default class Note extends Component {
  render() {
    debugger
    return (
      <>
        <div className='noteHeader'>
          <h2 className='noteTitle'>Note Name</h2>
          <ModDate />
          <Delete />
        </div>
        <NoteContent />
      </>
    )
  }
}