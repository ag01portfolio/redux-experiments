import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Increment, Decrement } from "../store/index";

const Counter = () => {
  const counter = useSelector((state) => state.counter); // Takes a function that receives the Redux state and returns the part of the state we want to use.
  const dispatch = useDispatch(); // Returns a reference to the dispatch function from the Redux store. We can use it to dispatch actions.

  console.log(counter);

  const incrementHandler = () => {
    dispatch({ type: Increment }); // Dispatching an action to increment the counter
  };

  const decrementHandler = () => {
    dispatch({ type: Decrement }); // Dispatching an action to DEC the counter
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}> Increment </button>
        <button onClick={decrementHandler}> Decrement </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
