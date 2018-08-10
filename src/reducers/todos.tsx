const todos = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
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
        case 'TOGGLE_TODO':
            return state.map((todo: any) =>
                (todo.id === action.id)
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        default:
            return state
    }
}

export default todos