import { useDispatch, useSelector } from "react-redux";
import { down, reset, up } from "../../actions/counter";

function Counter() {
  const counter = useSelector((state) => state.counterReducer); // return value
  const dispatch = useDispatch(); // return function
  console.log(counter);
  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(up(5))}>UP</button>
      <button onClick={() => dispatch(down(3))}>DOWN</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </>
  );
}

export default Counter;
