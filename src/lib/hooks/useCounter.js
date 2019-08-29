import { useState } from "react";

const useCounter = initialValue => {
  const [state, setState] = useState(initialValue);

  const increment = () => setState(state => state + 1);
  const decrement = () => setState(state => state - 1);
  const reset = () => setState(0);

  return { state, increment, decrement, reset };
};

export default useCounter;
