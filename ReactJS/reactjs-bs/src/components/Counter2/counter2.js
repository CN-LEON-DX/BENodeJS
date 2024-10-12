import { useSelector } from "react-redux";

function Counter2() {
  const counter = useSelector((state) => state.counterReducer);
  return (
    <>
      <h1>Counter2: {counter}</h1>
    </>
  );
}

export default Counter2;
