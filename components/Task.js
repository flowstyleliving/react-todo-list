import React, { Component } from 'react'
import Note from './Note'

class Task extends Component {
  constructor() {
    super()
    this.state = {
      note: ""
    }
  }

  handleNote(event) {
    event.preventDefault()
    this.props.actions.completeNote(this.state.note, this.props.task.id)
  }

  handleComplete() {
    this.props.actions.completeTask(this.props.task.id)
  }

  handleDelete() {
    this.props.actions.deleteTask(this.props.task.id)
  }

  render() {
    return (
      <li>
        <div>{this.props.task.title}</div>
        <button onClick={this.handleComplete.bind(this)}>Mark as completed</button>
        <button onClick={this.handleDelete.bind(this)}>Delete task</button>
        <ul>
          <li>
            <form onSubmit={this.handleNote.bind(this)}>
              <input type="text" placeholder="Note..." defaultValue={this.state.note}/>
              <button type="submit">Submit</button>
            </form>
          </li>
          {this.props.task.notes.map((note) => {
            return <Note note={note}/>
          })}
        </ul>
      </li>
    )
  }

}

export default Task
