import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './components/header/Header'
import Main from './components/main/Main'
import SideBar from './components/sideBar/SideBar'
import SideBarActiveNote from './components/sideBarActiveNote/SideBarActiveNote'
import Note from './components/note/Note'
import './App.css';
import NOTES from './dummyData'

export default class App extends Component {
  state = {
    notes: [],
    folders: [],
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
        res.json()
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
        res.json()
      })
      .then(this.setNotes)
      .catch(error => this.setState({ error }))
  }

  componentDidMount() {
    fetch('http://localhost:9090/folders', {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      },
    }
    )
      .then(res => {
        if (!res.ok) {
          throw new Error(res.status)
        }
        return res.json()
      })
      .then(this.setFolders)
      .catch(error => this.setState({ error }))
  }

  render() {
    debugger
    const { notes, folders } = this.state
    const { main, sideBar } = this.props
    /* 
    const className =
      this.props.main === Notes
        ? 'mainContainer activeNote'
        : 'mainContainer' 
    */

    return (
      <div className="App">
        <header className="header">
          <Header />
        </header>
        {/* 
          <main className={className}>
            {main}
            {sideBar}
          </main>
        */}
        <Switch>
          <Route
            exact
            path='/'
            render={() => {
              return (
                <main className='mainContainer'>
                  <SideBar folders={folders} />
                  <Main {...this.state} />
                </main>
              )
            }}
          />
          <Route
            path='/folder/:folderId'
            render={() => {
              return (
                <main className='mainContainer'>
                  <SideBar folders={folders} />
                  <Main {...this.state} />
                </main>
              )
            }}
          />
          <Route
            path='/note/:noteId'
            render={({ history }) => {
              return (
                <main className='mainContainer activeNote'>
                  <SideBarActiveNote
                    {...this.state}
                    goBackClick={() => { history.goBack() }}
                  />
                  <Note {...this.state} />
                </main>
              )
            }}
          />
        </Switch>
      </div>
    )
  }
}
