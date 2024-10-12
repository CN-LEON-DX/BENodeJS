const counterReducer = (state = 0, action) => {
  console.log(state, action);
  switch (action.type) {
    case "UP":
      return state + action.step;
    case "DOWN":
      return state - action.step;
    case "RESET":
      return 0;
  }
  return state;
};

export default counterReducer;
