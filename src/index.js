import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './reset.css'
import './index.css';
import App from './App';
import Main from './components/main/Main'
import SideBar from './components/sideBar/SideBar'
import SideBarActiveNote from './components/sideBarActiveNote/SideBarActiveNote'
import Note from './components/note/Note'

ReactDOM.render(
  <BrowserRouter>
    <React.StrictMode>
      {/* 
        <App>
          <Switch>
            <Route exact path='/' components={{main: Main, sideBar: SideBar}}
            <Route path='folder/:folderId' components={{main: Main, sideBar: SideBar}}
            <Route path='note/noteId' components={{main: Note, sideBar: SideBarActiveNote}}
          </Switch>
        </App>
      */}
      <App />
    </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);