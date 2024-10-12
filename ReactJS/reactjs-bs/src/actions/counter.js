export const up = (step) => {
  return {
    type: "UP",
    step: step,
  };
};

export const down = (step) => {
  return {
    type: "DOWN",
    step: step,
  };
};

export const reset = () => {
  return {
    type: "RESET",
  };
};
