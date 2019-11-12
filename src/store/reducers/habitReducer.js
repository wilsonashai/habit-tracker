import moment from 'moment';

let today = moment();
let yesterday = moment().subtract(1, 'day');
let twoDaysAgo = moment().subtract(2, 'day');

const initState = {
    habits: [
        {
            id: '0', 
            name: 'eating healthy', 
            cadence: 'WEEKLY', 
            startDate: today.format('YYYY-MM-DD'), 
            daysComplete: 0,
            trackedDays: [
                {date: today.format('YYYY-MM-DD'), completed: false}
            ]
        },
        {
            id: '1', 
            name: 'exercising', 
            cadence: 'WEEKLY', 
            startDate: twoDaysAgo.format('YYYY-MM-DD'), 
            daysComplete: 2, 
            trackedDays: [
                {date: twoDaysAgo.format('YYYY-MM-DD'), completed: true},
                {date: yesterday.format('YYYY-MM-DD'), completed: true},
                {date: today.format('YYYY-MM-DD'), completed: false}
            ]   
        }
    ]
};

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