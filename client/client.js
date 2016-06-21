import React from 'react'
import { render } from 'react-dom'
import App from '../components/App'
import configureStore from '../redux/store'
import { Provider } from 'react-redux'

// let initialState = {
//   todos: [{
//     id: 0,
//     completed: false,
//     text: 'Initial todo for demo purposes'
//   }],
//   user: {
//     username: 'se_ohm',
//     id: 64
//   }
// }

let initialState = {
  tasks: [{
    id: 1,
    title: 'do this',
    descript: 'With Care and Love'
  }, {
    id: 2,
    title: 'then this',
    descript: 'With even more Attention'
  }, {
    id: 3,
    title: 'yes',
    descript: 'Love is True when Truth is Love'
    }
  ]
}

let store = configureStore(initialState)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
