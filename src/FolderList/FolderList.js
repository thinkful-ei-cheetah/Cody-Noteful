import React, { Component } from 'react'
import Folder from './Folder'
import UserContent from '../ApiContent'
export default class FolderList extends Component {
    static contextType = UserContent
  render() {
      let folders = this.context.folders || [];
        folders = folders.map((item, index)=> {
          const {id , name} = item;
          return (<Folder
          key={index}
          id ={id}
          name= {name}
          />)
       })
       console.log(this.context)

    return (
        <div>
            {folders}
            <button> Add New Folder</button>
        </div>
            
    )
  }
}


