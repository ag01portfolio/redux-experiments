/*
 *  Redux
 *  1. Create a store [ by using createStore from redux ]
 *  2. Create a reducer [ with 2 arguments: state and action, based on the action type, it will return a new state ]
 *  3. Create an initial state and pass it to the reducer
 */

import { createStore } from "redux";

// Initial state
const initialState = {
  counter: 0,
};

// Reducer -> Wt to do when an action is dispatched
const counterReducer = (state = { initialState }, action) => {
  if (action.type === "increment") {
    return { counter: (state.counter || 0) + 1 };
  }

  if (action.type === "decrement") {
    return { counter: (state.counter || 0) + 1 };
  }

  return state; // Return the current state if no action matches
};

// Store -> Create a store with the reducer
const store = createStore(counterReducer); // Pointing counterReducer function when we create the store
// This reducer fn will gv the instructions to store 'What to do when an action is dispatched'

export default store;
