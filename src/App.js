import React, { Component } from 'react'
import HomePage from './Pages/HomePage'
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom'
import FolderPage from './Pages/FolderPage';
import NotePage from './Pages/NotePage';

export default class App extends Component {
constructor(props){
  super(props)
  this.state = {
    folders:props.list.folders,
    notes:props.list.notes

  }
}
handleChangePage =() => {

}

  render() {


    return (
      <div>
        <header>
        <h2>
          <Link to={`/`}>
          NoteFul
        </Link>
          </h2>
        </header>
        <Route exact path="/" render={()=> <HomePage {...this.state} /> }/>
        <Route path='/Folder/:folderId' render= {( routeProps ) =>  
          <FolderPage folderId={routeProps.match.params.folderId} {...this.state} />} />
        <Route path='/Note/:noteId' render= {( routeProps ) =>  
          <NotePage noteId={routeProps.match.params.noteId} {...this.state} />} />
      </div>
    )
  }
}

