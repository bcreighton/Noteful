import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import NoteList from '../noteList/NoteList'
import './Main.css'

class Main extends Component {
  getNotesById() {
    return this.props.notes.filter(note => note.folderId === this.props.match.params.folderId);
  }

  render() {
    return (
      <section className='mainSection'>
        {
          this.props.match.params.folderId
            ? <NoteList
              notes={this.getNotesById()}
            />
            : <NoteList
              notes={this.props.notes}
            />
        }
      </section>
    )
  }
}

export default withRouter(Main);