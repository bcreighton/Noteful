import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Folder from '../folder/Folder'
import './FolderList.css'

class FolderList extends Component {
  // state = {
  //   folderId: null
  // }

  // componentDidMount() {
  //   this.setState({
  //     folderId: this.props.match.params.folderId
  //   })
  // }

  render() {

    return (
      <>
        {
          this.props.folders.map(folder => (
            // folder.id === this.state.folderId
            <Folder
              key={folder.id}
              id={folder.id}
              name={folder.name}
              className={'folder'}
            />
            // ? <Folder
            //   key={folder.id}
            //   id={folder.id}
            //   name={folder.name}
            //   className={'folder activeFolder'}
            // />
            // : <Folder
            //   key={folder.id}
            //   id={folder.id}
            //   name={folder.name}
            //   className={'folder'}
            // />
          ))
        }
      </>
    )
  }
}

export default withRouter(FolderList)