import React from "react";
import useCounter from "../lib/hooks/useCounter";
import PropTypes from "prop-types";

const App = ({ title }) => {
  const { state: count, increment, decrement, reset } = useCounter(0);
  return (
    <>
      <h1 data-testid="app-title" className="title">
        {title}
      </h1>
      <p>Count: {count}</p>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
      <button onClick={() => reset()}>reset</button>
    </>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
};

export default App;
