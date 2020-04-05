import React, { Component } from 'react';
import Header from './components/header/Header'
import Main from './components/main/Main'
import SideBar from './components/sideBar/SideBar'
import './App.css';

export default class App extends Component {
  state = {

  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <Header />
        </header>
        <main className='mainContainer'>
          <Main />
          <SideBar />
        </main>
      </div>
    )
  }
}
