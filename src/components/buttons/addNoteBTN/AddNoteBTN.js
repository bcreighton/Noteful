import React, { Component } from 'react'
import '../Button.css'
import './AddNoteBTN.css'

export default class AddNoteBTN extends Component {
  render() {
    return (
      <button id='addNoteBTN' className='btn addBTN'>Add Note</button>
    )
  }
}