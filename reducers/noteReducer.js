function getId(notes) {
  return notes.reduce((maxId, note) => {
    return Math.max(note.id, maxId)
  }, -1) + 1
}

let noteReducer = function(notes = [], action) {
  switch(action.type) {
    case 'ADD_NOTE':
      return [{
        text: action.text,
        completed, false,
        id: getId(notes)
      }, ...notes]
    case 'COMPLETE_NOTE':
    console.log(this.props.note.id)
      return
        notes.map((note) => {
          return note.id === action.id ?
            Object.assign({}, note, {completed: !note.completed}) : note
        })
    default:
      return notes;
  }
}

export default noteReducer
