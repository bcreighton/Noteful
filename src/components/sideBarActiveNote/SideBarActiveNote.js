import React, { Component } from 'react'
import NotefulContext from '../../NotefulContext'
import { withRouter } from 'react-router-dom'
import GoBack from '../buttons/goBack/GoBack'
import './SideBarActiveNote.css'

class SideBarActiveNote extends Component {
  static contextType = NotefulContext;

  getFolder() {
    const selectedNote = this.context.notes.find(note => note.id === this.props.match.params.noteId)

    return this.context.folders.find(folder => folder.id === selectedNote.folderId)
  }

  render() {
    const selectedFolder = this.getFolder()
    return (
      <aside className='sideBar activeNote'>
        <GoBack />
        <h2 className='folderName'>{selectedFolder.name}</h2>
      </aside>
    )
  }
}

export default withRouter(SideBarActiveNote)