import React, { Component } from 'react'
import NotefulContext from '../../NotefulContext'
import { withRouter } from 'react-router-dom'
import NoteList from '../noteList/NoteList'
import './Main.css'

class Main extends Component {
  static contextType = NotefulContext;

  render() {
    return (
      <section className='mainSection'>
        <NoteList />
      </section>
    )
  }
}

export default withRouter(Main);