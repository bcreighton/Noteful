import React, { Component } from 'react'
import Folder from '../folder/Folder'
import AddFolder from '../buttons/addFolder/AddFolder'
import './FolderList.css'

export default class FolderList extends Component {
  render() {
    const folderList = this.props.folders.map(folder => (
      <Folder
        key={folder.id}
        id={folder.id}
        name={folder.name}
      />
    ))
    return (
      <>
        {folderList}
        <AddFolder />
      </>
    )
  }
}