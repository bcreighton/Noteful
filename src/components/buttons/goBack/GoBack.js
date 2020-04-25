import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import '../Button.css'
import './GoBack.css'

class GoBack extends Component {

  goBackClick = () => {
    this.props.history.goBack()
  }

  render() {
    return (
      <button
        id='goBack'
        className='btn'
        onClick={this.goBackClick}
      >Go Back</button>
    )
  }
}

export default withRouter(GoBack)