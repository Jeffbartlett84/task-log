const tasks = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return [
                ...state,
                {
                    completed: false,
                    completedDate: action.completedDate,
                    id: action.id,
                    important: false,
                    isEditing: false,
                    lastUpdated: action.lastUpdated,
                    notes: action.notes,
                    text: action.text
                }
            ]
        case 'TOGGLE_TASK':
            return state.map((task: any) =>
                (task.id === action.id)
                    ? { ...task, completed: !task.completed }
                    : task
            )
        default:
            return state
    }
}

export default tasks