
export const addTask = (task) => ({
    task,
    type: 'ADD_TASK',
});

export const toggleTask = id => ({
    id,
    type: 'TOGGLE_TASK',
});