function getId(tasks) {
  return tasks.reduce((maxId, task) => {
    return Math.max(task.id, maxId)
  }, -1) + 1
}

let taskReducer = function(tasks = [], action) {
  switch (action.type) {
    case 'ADD_NOTE':
      return
        tasks.map((task) => {
          return task.id === action.id ?
            Object.assign({}, task, {notes: action.text}) : task
        })
    case 'ADD_TASK':
      return [{
          text: action.text,
          completed: false,
          id: getId(tasks)
        }, ...tasks]
    case 'COMPLETE_TASK':
      return
        tasks.map((task) => {
          return task.id === action.id ?
            Object.assign({}, task, {completed: !task.completed}) : task
        })
    case 'DELETE_TASK':
      return tasks.filter((task) => {
          return task.id !== action.id
        })
    default:
      return tasks;
  }
}

export default taskReducer
