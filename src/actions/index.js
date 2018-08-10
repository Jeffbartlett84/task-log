let nextTodoId = 0
export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text,
    completed: false,
    completedDate: '',
    important: false,
    isEditing: false,
    lastUpdated: moment('MM/DD/YYYY'),
    notes: ''
})

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})