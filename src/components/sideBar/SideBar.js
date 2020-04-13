import React, { Component } from 'react'
import FolderList from '../folderList/FolderList'
import AddFolder from '../buttons/addFolder/AddFolder'
import GoBack from '../buttons/goBack/GoBack'
import './SideBar.css'

export default class SideBar extends Component {
  render() {
    return (
      <aside className='sideBar'>
        <FolderList
          folders={this.props.folders}
        />
        <AddFolder />
      </aside>
    )
  }
}