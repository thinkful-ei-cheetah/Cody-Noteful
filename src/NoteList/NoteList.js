import React, { Component } from 'react'
import Note from './Note'

export default class NoteList extends Component {
  render() {
    const notes = this.props.notes || [];
     const noteData = notes.map((item, index)=> {
          const {id , name, modified, folderId, content} = item;
          return (<Note
          key={index}
          id ={id}
          name= {name}
          modified={modified}
          folderId={folderId}
          content={content}
          />)
      })
    return (
        <section>
            {noteData}
            <button>Add notes</button>
        </section>
    )
  }
}
