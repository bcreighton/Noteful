import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ModDate from '../modDate/ModDate'
import Delete from '../buttons/delete/Delete'
import './NoteListItem.css'

export default class NoteListItem extends Component {
  render() {
    const { id, title, modDate } = this.props
    return (
      <Link to={`/note/${id}`} id={id} className='noteItem'>
        <div className='noteHeader'>
          <h2 className='noteTitle'>{title}</h2>
          <ModDate date={modDate} />
          <Delete />
        </div>
      </Link>
    )
  }
}