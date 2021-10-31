import React, { useState } from "react";
import PropTypes from "prop-types";

const CounterApp = ({ value }) => {
  //Hooks (useState)
  const [counter, setCounter] = useState(value);
  const handleSum = () => setCounter(counter + 1);
  const handleSubtract = () => setCounter(counter - 1);
  const handleReset = () => setCounter(value);
  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={handleSum}>+1</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleSubtract}>-1</button>
    </>
  );
};

// CounterApp.propTypes = {
//   value: PropTypes.number.isRequired,
// };

CounterApp.defaultProps = {
  value: 10,
};

export default CounterApp;
