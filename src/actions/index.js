let nextTaskId = 0
export const addTask = text => ({
    completed: false,
    completedDate: '',
    id: nextTaskId++,
    important: false,
    isEditing: false,
    lastUpdated: moment('MM/DD/YYYY'),
    notes: '',
    text,
    type: 'ADD_TASK',
})

export const toggleTask = id => ({
    id,
    type: 'TOGGLE_TASK',
})