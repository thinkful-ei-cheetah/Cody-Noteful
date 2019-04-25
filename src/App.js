import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom'
import UserContent from './ApiContent'

import HomePage from './Pages/HomePage'
import FolderPage from './Pages/FolderPage';
import NotePage from './Pages/NotePage';

export default class App extends Component {

  state = {
    folders:[],
    notes:[]
  }
  
  
  // Promise.all([getFolders(), getNotes()])
  //   .then(data => {
    //     console.log(`folder data is ${data[0]}, note data is ${data[1]}`)
    //   })
    
    // const options = {
      //   method: 'GET',
      //   headers: {
        //     "Content-Type": "application/json"
        //   }
        // };
        
        // const getFolders = () => fetch('http://localhost:9090/folders', options)
        // const getNotes = () => fetch('http://localhost:9090/notes', options)
        
        //   }
        
        
        
        
  componentDidMount(){
const folderURL = 'http://localhost:9090/folders';
const noteURl = 'http://localhost:9090/notes'

const options = {
  method: 'GET',
  headers: {
    "Content-Type": "application/json"
  }
};
let folderData = fetch(folderURL, options)
  .then(res => {
    if(!res.ok) {
      throw new Error('Something went wrong, please try again later.');
    }
    return res;
  })
  .then(res => res.json())
  .then(data => {
  //  console.log(data)

    this.setState({
      folders: data,
      error: null
    });
  })
  .catch(err => {
    this.setState({
      error: err.message
    });
  });

  let noteData = fetch(noteURl, options)
  .then(res => {
    if(!res.ok) {
      throw new Error('Something went wrong, please try again later.');
    }
    return res;
  })
  .then(res => res.json())
  .then(data => {
  //  console.log(data)

    this.setState({
      notes: data,
      error: null
    });
  })
  .catch(err => {
    this.setState({
      error: err.message
    });
    return folderData && noteData
  });
}
handleDeleteNote = noteId => {
  this.setState({
    notes: this.state.notes.filter(note => note.id !== noteId)
  })
}
  render() {
    return (
        <UserContent.Provider value ={{
          folders:this.state.folders,
          notes:this.state.notes,
          delete:this.handleDeleteNote
        }}>
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
        </UserContent.Provider>
    )
  }
}

