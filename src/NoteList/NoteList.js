import React, { Component } from 'react'
import Note from './Note'
import UserContent from '../ApiContent'

export default class NoteList extends Component {
  static contextType = UserContent
  render() {
     let notes = this.context.notes || [];

     if (this.props.folderId) {
        notes = notes.filter(note => note.folderId === this.props.folderId)
     }

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
