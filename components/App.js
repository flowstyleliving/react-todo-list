import React, { Component } from 'react'
import TaskInput from './TaskInput'
import TaskList from './TaskList'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import actions from '../redux/actions'
import UserInfo from '../components/UserInfo'

class App extends Component {

  render() {
    return (
      <div>
        <h1>Task List</h1>
        <UserInfo user={this.props.user} actions={this.props.actions}/>
        <TaskInput addTask={this.props.actions.addTask}/>
        <TaskList actions={this.props.actions} tasks={this.props.tasks}/>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
