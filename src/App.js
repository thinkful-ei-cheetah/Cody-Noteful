import React, { Component } from 'react'
import HomePage from './Pages/HomePage'
import { Route } from 'react-router-dom';

export default class App extends Component {
constructor(props){
  super(props)
  this.state = {
    folders:props.list.folders,
    notes:props.list.notes

  }
}

  render() {
    

    return (
      <div>
        <Route exact path="/" render={()=> <HomePage {...this.state} /> }/>
      </div>
    )
  }
}

