import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Header from './components/header/Header'
import Main from './components/main/Main'
import SideBar from './components/sideBar/SideBar'
import FolderList from './components/folderList/FolderList'
import SideBarActiveNote from './components/sideBarActiveNote/SideBarActiveNote'
import Note from './components/note/Note'
import NotFound from './components/NotFound'
import './App.css';
import NOTES from './dummyData'

export default class App extends Component {
  state = {
    notes: NOTES.notes,
    folders: NOTES.folders,
  }

  render() {
    const { notes, folders } = this.state

    return (
      <div className="App">
        <header className="header">
          <Header />
        </header>
        <main className='mainContainer'>
          <Switch>
            <Route
              exact
              path='/'
              render={() => {
                return (
                  <>
                    <SideBar folders={folders} />
                    <Main {...this.state} />
                  </>
                )
              }}
            />
            <Route
              path='/folder/:folderId'
              render={() => {
                return (
                  <>
                    <SideBar folders={folders} />
                    <Main {...this.state} />
                  </>
                )
              }}
            />
            <Route
              path='/note/:noteId'
              render={() => {
                return (
                  <>
                    <SideBarActiveNote />
                    <Note {...this.state} />
                  </>
                )
              }}
            />
          </Switch>
        </main>
      </div>
    )
  }
}
