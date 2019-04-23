import React, { Component } from 'react'
import Folder from './Folder'

export default class FolderList extends Component {
  render() {
      let folders = this.props.folders || [];
        folders = folders.map((item, index)=> {
          const {id , name} = item;
          return (<Folder
          key={index}
          id ={id}
          name= {name}
          />)
       })
       console.log(this.props)

    return (
        <div>
            {folders}
            <button> Add New Folder</button>
        </div>
            
    )
  }
}


