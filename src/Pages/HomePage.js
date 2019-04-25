import React, { Component } from 'react'
import NoteList from '../NoteList/NoteList'
import FolderList from '../FolderList/FolderList'
// Statefull practice
export default class HomePage extends Component {
  render() {
    return (
      <div>
        <nav>
          <FolderList folders = {this.props.folders}/>
        </nav>
        <section>
          
          <NoteList notes={this.props.notes}/>
        </section>
      </div>
    )
  }
}
//State-less Practice
// const HomePage = props => {
//   return (
//     <div>
//       <nav>
//         <FolderList folders = {props.folders}/>
//       </nav>
//       <section>
        
//         <NoteList notes={props.notes}/>
//       </section>
//     </div>
//   )
// }
// export default HomePage