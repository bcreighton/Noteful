import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Header from './components/header/Header'
import Main from './components/main/Main'
import SideBar from './components/sideBar/SideBar'
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

  render() {
    return (
      <div className="App">
        <header className="header">
          <Header />
        </header>
        <main className='mainContainer'>
          <SideBar
            folders={this.state.folders}
          />
          <Main
            notes={this.state.notes}
          />
        </main>
      </div>
    )
  }
}
