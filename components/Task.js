import React, { Component } from 'react'

class Task extends Component {

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
      </li>
    )
  }

}

export default Task
