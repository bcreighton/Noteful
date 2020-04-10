import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Header from './components/header/Header'
import Main from './components/main/Main'
import SideBar from './components/sideBar/SideBar'
import FolderList from './components/folderList/FolderList'
import SideBarActiveNote from './components/sideBarActiveNote/SideBarActiveNote'
import Note from './components/note/Note'
import './App.css';
import NOTES from './dummyData'

export default class App extends Component {
  state = {
    notes: NOTES.notes,
    folders: NOTES.folders,
    folderId: null,
    noteId: null,
  }

  noteSelect(note) {
    return <></>
  }

  folderSelect(folder) {
    return <></>
  }


  render() {
    const { notes, folders, folderId, noteId } = this.state

    return (
      <div className="App">
        <header className="header">
          <Header />
        </header>
        <main className='mainContainer'>
          <SideBar folders={folders}>
            <Route
              path='/'
              component={FolderList}
            />
            <Route
              path='/folder/:folderId'
              render={() => {
                return <FolderList />
              }}
            />
            <Route
              path='/note/:noteId'
              render={() => {
                return <SideBarActiveNote />
              }}
            />
          </SideBar>

          <Route
            exact
            path='/'
            render={(props) => {
              debugger
              return <Main {...this.state} />
            }}
          />
          <Route
            path='/folder/:folderId'
            render={(props) => {
              debugger;
              return <Main {...this.state} />
            }}
          />
          <Route
            path='/note/:noteId'
            render={() => {
              return <Note />
            }}
          />
        </main>
      </div>
    )
  }
}
