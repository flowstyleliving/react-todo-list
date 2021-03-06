import React, { Component } from 'react'
import Note from './Note'

class Task extends Component {
  constructor(props) {
    super(props)
    this.state = {
      note: ""
    }
  }

  handleChange(event) {
    this.setState({
      note: event.target.value
    })
  }

  handleNote(event) {
    event.preventDefault()
    this.props.actions.addNote(this.state.note, this.props.task.id)
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
        {this.props.task.title} &nbsp;
        <button onClick={this.handleComplete.bind(this)}>Mark as completed</button>
        <button onClick={this.handleDelete.bind(this)}>Delete task</button>
            <form onSubmit={this.handleNote.bind(this)}>
              <input type="text"
                placeholder="Note..."
                onChange={this.handleChange.bind(this)}
                value={this.state.note}/>
              <button type="submit">Submit</button>
            </form>
        <ul>
          {this.props.task.notes.map((note, i) => {
            return <Note key={`note${i}`} note={note}/>
          })}
        </ul>
      </li>
    )
  }

}

export default Task
