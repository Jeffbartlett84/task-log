import * as moment from 'moment';

const tasks = (state = {
    allTasks: [{title: 'something', id: moment.valueOf()}],
    important: false,
    notes: '',
    text: ''
}, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            state = {
                ...state,
                important: false,
                notes: action.notes,
                text: action.text
            };
            break;
        case 'TOGGLE_TASK':
           
        default:
            return state
    }
}

export default tasks