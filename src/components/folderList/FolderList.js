import React, { Component } from 'react'
import Folder from '../folder/Folder'
import AddFolder from '../buttons/addFolder/AddFolder'
import './FolderList.css'

export default class FolderList extends Component {
  render() {
    return (
      <>
        <Folder />
        <Folder />
        <Folder />
        <AddFolder />
      </>
    )
  }
}