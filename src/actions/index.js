
import { habitsRef } from "../config/firebase";
import { FETCH_HABITS } from "./types";

export const addHabit = newHabit => async dispatch => {
  habitsRef.push().set(newToDo);
};

export const completeHabit = completeHabitId => async dispatch => {
  habitsRef.child(completeHabitId).remove();
};

export const fetchHabits = () => async dispatch => {
  habitsRef.on("value", snapshot => {
    dispatch({
      type: FETCH_HABITS,
      payload: snapshot.val()
    });
  });
};