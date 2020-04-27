import React, { Component } from 'react'
<<<<<<< HEAD
import { withRouter } from 'react-router-dom'
=======
import NotefulContext from '../../NotefulContext'
>>>>>>> contextRefactor
import NoteList from '../noteList/NoteList'
import './Main.css'

class Main extends Component {

  render() {
    return (
      <section className='mainSection'>
        <NoteList folderId={this.props.match.params.folderId} />
      </section>
    )
  }
}

export default Main;