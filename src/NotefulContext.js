import React from 'react'

const NotefulContext = React.createContext({
  notes: {},
  folders: {},
  deleteNote: () => { },
  addNote: () => { },
})

export default NotefulContext