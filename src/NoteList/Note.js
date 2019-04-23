import React, { Component } from 'react'

export default class Note extends Component {
  render() {

    const {id,
        name,
        modified,
        folderId,
        content} = this.props;
    return (
      <div className={id}>
        <h2>{name}</h2>
        <p>Date modified {modified}</p>
        <p>{content}</p>
        <button>Delete</button>
      </div>
    )
}
}
