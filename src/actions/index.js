let nextTaskId = 0
export const addTask = text => ({
    type: 'ADD_TASK',
    id: nextTaskId++,
    text,
    completed: false,
    completedDate: '',
    important: false,
    isEditing: false,
    lastUpdated: moment('MM/DD/YYYY'),
    notes: ''
})

export const toggleTask = id => ({
    type: 'TOGGLE_TASK',
    id
})