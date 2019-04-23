import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Note extends Component {
  render() {

    const {id,
        name,
        modified,
        folderId,
        content} = this.props;
    return (
      <div className={id}>
        <h2>
        <Link to={`/note/${folderId}`}>
          {name}
        </Link>
        </h2>
        <p>Date modified {modified}</p>
        <p>{content}</p>
        <button>Delete</button>
      </div>
    )
}
}
