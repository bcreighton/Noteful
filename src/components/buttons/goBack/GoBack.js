import React, { Component } from 'react'
import '../Button.css'
import './GoBack.css'

export default class GoBack extends Component {
  render() {
    return (
      <button
        id='goBack'
        className='btn'
        onClick={this.props.goBackClick}
      >Go Back</button>
    )
  }
}