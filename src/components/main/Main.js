import React, { Component } from 'react'
import NoteList from '../noteList/NoteList'
import './Main.css'

export default class Main extends Component {
  render() {
    return (
      <section className='mainSection'>
        <NoteList
          notes={this.props.notes}
        />
      </section>
    )
  }
}