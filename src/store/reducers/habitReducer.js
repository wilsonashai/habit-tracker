const initState = {};

const habitReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_HABIT':
            console.log('created habit', action.habit);
            return state;
        case 'CREATE_HABIT_ERROR':
            console.log('create project error', action.error)
            return state;
        default:
            return state;
    }
}

export default habitReducer;