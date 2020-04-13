import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import GoBack from '../buttons/goBack/GoBack'
import './SideBarActiveNote.css'

class SideBarActiveNote extends Component {
  getFolder() {
    const selectedNote = this.props.notes.find(note => note.id === this.props.match.params.noteId)
    return this.props.folders.find(folder => folder.id === selectedNote.folderId)
  }

  render() {
    const selectedFolder = this.getFolder()
    return (
      <aside className='sideBar activeNote'>
        <GoBack
          goBackClick={this.props.goBackClick}
        />
        <h2 className='folderName'>{selectedFolder.name}</h2>
      </aside>
    )
  }
}

export default withRouter(SideBarActiveNote)