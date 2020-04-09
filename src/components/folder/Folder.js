import React, { Component } from 'react'
import './Folder.css'

export default class Folder extends Component {
  render() {
    const { id, name } = this.props
    return (
      <div className='folder'>
        <h2 className='folderName'>{name}</h2>
      </div>
    )
  }
}