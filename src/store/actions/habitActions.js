export const createHabit = (habit) => {
    // dispatch method dispatches action to the reducer
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('habit').add({
            ...habit
        }).then(() => {
            dispatch({ type: 'CREATE_HABIT', habit });
        }).catch((error) => {
            dispatch({ type: 'CREATE_HABIT_ERROR', error });
        })
    }
}