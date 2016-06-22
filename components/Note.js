import React, { Component } from 'react'

class Note extends Component {

    handleComplete() {
      this.props.actions.completeNote(this.props.note.id)
    }

  render() {
    return (
      <li>
        {this.props.note.title}
        <button onClick={this.handleComplete.bind(this)}>Mark as completed</button>
      </li>
    )
  }
}

export default Note
