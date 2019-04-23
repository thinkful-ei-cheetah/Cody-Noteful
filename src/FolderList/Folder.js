import React, { Component } from 'react'

export default class Folder extends Component {
  render() {
      const {id,name} = this.props
    return (
      <div>
        <ul>
            <li className={id}>{name}</li>
        </ul>
      </div>
    )
  }
}
/* <Link to="/settings/profile"></Link> */