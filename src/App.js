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
    inFolder: false,
    inNote: false,
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
    const { notes, folders, inFolder, inNote, folderId, noteId } = this.state

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
              render={({{notes, folders}}) => {
              <FolderList />
            }}
            />
            <Route
              path='/note/:noteId'
              render={() => {
                <SideBarActiveNote />
              }}
            />
          </SideBar>
          <Main notes={this.state.notes}>
            <Route
              path='/'
              component={Main}
            />
            <Route
              path='/folder/:folderId'
              render={() => {
                <Main />
              }}
            />
            <Route
              path='/note/:noteId'
              render={() => {
                <Note />
              }}
            />
          </Main>
        </main>
      </div>
    )
  }
}
