import React, { Component } from 'react'
import NotefulContext from '../../../NotefulContext'
import '../Button.css'
import './GoBack.css'

export default class GoBack extends Component {
  static contextType = NotefulContext;

  /* 
  goBackClick = () => {
    this.props.history.goBack()
  }
  */

  render() {
    return (
      <button
        id='goBack'
        className='btn'
        /* onClick={this.goBackClick} */
        onClick={this.props.goBackClick}
      >Go Back</button>
    )
  }
}