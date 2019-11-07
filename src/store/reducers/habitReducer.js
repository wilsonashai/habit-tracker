const initState = {
    habits: [
        {id: '0', name: 'eating healthy', cadence: 'WEEKLY', startDate: new Date()},
        {id: '1', name: 'exercising', cadence: 'WEEKLY', startDate: new Date()}
    ]
};

const habitReducer = (state = initState, action) => {
    return state;
}

export default habitReducer;