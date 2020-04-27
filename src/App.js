import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './components/header/Header'
import Main from './components/main/Main'
import SideBar from './components/sideBar/SideBar'
import SideBarActiveNote from './components/sideBarActiveNote/SideBarActiveNote'
import Note from './components/note/Note'
import './App.css';
import NOTES from './dummyData'
import NotefulContext from './NotefulContext';

export default class App extends Component {
  state = {
    notes: [],
    folders: [],
    error: null,
  }

  setFolders = folders => {
    this.setState({
      folders,
      error: null,
    })
  }

  setNotes = notes => {
    this.setState({
      notes,
      error: null,
    })
  }

  getFolders() {
    fetch('http://localhost:9090/folders')
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status)
        }
        return res.json()
      })
      .then(this.setFolders)
      .catch(error => this.setState({ error }))
  }

  getNotes() {
    fetch('http://localhost:9090/notes')
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status)
        }
        return res.json()
      })
      .then(this.setNotes)
      .catch(error => this.setState({ error }))
  }

  componentDidMount() {
    this.getFolders()
    this.getNotes()
  }

  deleteNote = (noteId, notePage) => {
    // Remove note with the noteId from state
    const newNotes = this.state.notes.filter(
      note => note.id !== noteId
    )
    notePage !== undefined && notePage.push('/')
    this.setState({
      notes: newNotes,
    })
  }

  renderSideBarRoutes() {
    return (
      <>
        {['/', '/folder/:folderId'].map(path => (
          <Route
            exact
            key={path}
            path={path}
            component={SideBar}
          />
        )
        )}
        <Route
          path='/note/:noteId'
          component={SideBarActiveNote}
        />
      </>
    )
  }

  renderMainRoutes() {
    return (
      <>
        {['/', '/folder/:folderId'].map(path => (
          <Route
            exact
            key={path}
            path={path}
            component={Main}
          />
        )
        )}
        <Route
          path='/note/:noteId'
          component={Note}
        />
      </>
    )
  }

  render() {
    const { notes, folders } = this.state

    const contextValue = {
      notes,
      folders,
      deleteNote: this.deleteNote,
    }

    const className =
      this.props.match === undefined
        ? 'mainContainer'
        : this.props.match.path === '/note/:noteId'
          ? 'mainContainer activeNote'
          : 'mainContainer'

    return (
      <NotefulContext.Provider value={contextValue}>
        <div className="App">
          <header className="header">
            <Header />
          </header>

          <main className={className}>
            {this.renderMainRoutes()}
            {this.renderSideBarRoutes()}
          </main>
        </div>
      </NotefulContext.Provider>
    )
  }
}
