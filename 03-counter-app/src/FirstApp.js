import React from "react";
import PropTypes from "prop-types";

//Functional Components

const FirstApp = ({ greet, subtitle }) => {
  const str = greet;
  const obj = {
    name: "nicolas",
    age: 23,
  };

  return (
    <>
      <h1>{str}</h1>
      <p>{subtitle}</p>
      {/* <pre>{JSON.stringify(obj, null, 3)}</pre> */}
    </>
  );
};

//Defines the prop type for the props
//Like typescript
FirstApp.propTypes = {
  greet: PropTypes.string.isRequired,
};

//Declare default prop
FirstApp.defaultProps = {
    subtitle: `I'm a subtitle!`
}

export default FirstApp;
