import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Folder from '../folder/Folder'
import './FolderList.css'

class FolderList extends Component {

  render() {

    return (
      <>
        {
          this.props.folders.map(folder => (
            <Folder
              key={folder.id}
              id={folder.id}
              name={folder.name}
            />
          ))
        }
      </>
    )
  }
}

export default withRouter(FolderList)