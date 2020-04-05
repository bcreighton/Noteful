import React, { Component } from 'react'
import NoteList from '../noteList/NoteList'
import Note from '../note/Note'
import './Main.css'

export default class Main extends Component {
  render() {
    return (
      <section className='mainSection'>
        <NoteList />
        <Note />
      </section>
    )
  }
}