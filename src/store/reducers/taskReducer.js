const initState = {
    tasks: []
}

//Logs task creation and returns the new state to be rendered.
const taskReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_TASK':
            console.log('Task Created!', action.task);
            return state;
        case 'CREATE_TASK_ERR':
            console.log('Task Creation Error!', action.err);
            return state;
        default:
            break;
    }
    return state
}

export default taskReducer