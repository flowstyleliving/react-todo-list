import React, { Component } from 'react'

class TaskInput extends Component {

  constructor(props, context) {
    super(props, context)
    this.state = {
      inputText: ''
    }
  }

  handleChange(event) {
    this.setState({
      inputText: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.addTask(this.state.inputText)
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input
          type="text"
          placeholder="Type in your task"
          value={this.state.inputText}
          onChange={this.handleChange.bind(this)}
        />
        <input type="submit" text='Submit'/>
        </form>
      </div>
    )
  }

}

export default TaskInput
