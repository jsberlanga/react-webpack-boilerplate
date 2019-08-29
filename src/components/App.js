import React from "react";
import PropTypes from "prop-types";

const App = ({ title }) => {
  return (
    <>
      <h1 data-testid="app-title" className="title">
        {title}
      </h1>
    </>
  );
};

App.propTypes = {
  title: PropTypes.string.isRequired,
};

export default App;
