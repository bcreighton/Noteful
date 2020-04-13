import React, { Component } from 'react'
import '../Button.css'
import './AddNote.css'

export default class AddNote extends Component {
  render() {
    return (
      <button id='addNote' className='btn addBTN'>Add Note</button>
    )
  }
}