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
    notes: NOTES.notes,
    folders: NOTES.folders,
  }

  render() {
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
