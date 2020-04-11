import React, { Component } from 'react'
import GoBack from '../buttons/goBack/GoBack'
import './SideBarActiveNote.css'

export default class SideBarActiveNote extends Component {
  getFolderName() {
    return 'Folder'
  }

  render() {
    return (
      <>
        <GoBack />
        {this.getFolderName()}
      </>
    )
  }
}