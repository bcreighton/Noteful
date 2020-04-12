import React, { Component } from 'react'
import ModDate from '../modDate/ModDate'
import Delete from '../buttons/delete/Delete'
import './NoteListItem.css'

export default class NoteListItem extends Component {
  render() {
    const { id, title, modDate } = this.props
    return (
      <a href={`/note/${id}`}>
        <div className='noteHeader'>
          <h2 className='noteTitle'>{title}</h2>
          <ModDate date={modDate} />
          <Delete />
        </div>
      </a>
    )
  }
}