import React, { Component } from 'react'
import NotefulContext from '../../NotefulContext'
import { withRouter } from 'react-router-dom'
import NoteList from '../noteList/NoteList'
import './Main.css'

class Main extends Component {
  // static contextType = NotefulContext;

  getNotesById() {
    return this.props.notes.filter(note => note.folderId === this.props.match.params.folderId);
  }

  render() {
    return (
      // Refactored code using context
      /*
          <section className='mainSection'>
            <NoteList />
          </section>
     */
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