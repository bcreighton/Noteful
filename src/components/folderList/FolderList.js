import React, { Component } from 'react'
import NotefulContext from '../../NotefulContext'
import { withRouter } from 'react-router-dom'
import Folder from '../folder/Folder'
import './FolderList.css'

class FolderList extends Component {
  // static contextType = NotefulContext;

  render() {

    return (
      <>
        {
          // Refactored code using context
          // this.context.folders.map(folder =>
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