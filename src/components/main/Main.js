import React, { Component } from 'react'
import NotefulContext from '../../NotefulContext'
import NoteList from '../noteList/NoteList'
import './Main.css'

class Main extends Component {
  static contextType = NotefulContext;

  render() {
    return (
      <section className='mainSection'>
        <NoteList folderId={this.props.match.params.folderId} />
      </section>
    )
  }
}

export default Main;