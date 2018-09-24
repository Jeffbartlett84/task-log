// import uuid3 from 'uuid';
// import * as moment from 'moment';

const taskList = (state = {
    allTasks: [{title: 'create add action', id: '123'}],
    currentTask: '',
}, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            state = {
                ...state,
                allTasks: [...state.allTasks, action.task]
            };
            break;
        case 'TOGGLE_TASK':
           
        default:
            return state
    }
}

// const singleTask = (state = {
//     completed: false,
//     completedDate: '',
//     id: uuid3(),
//     important: false,
//     isEditing: false,
//     lastUpdated: moment('MM/DD/YYYY'),
//     notes: '',
//     text:'',
// }, action) => {
//     switch (action.type) {
//         case 'ADD_TASK':
//             state = {
//                 ...state,
//                 important: false,
//                 notes: action.notes,
//                 text: action.text
//             };
//             break;
//         case 'TOGGLE_TASK':
           
//         default:
//             return state
//     }
// }

export default taskList