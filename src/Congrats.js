import React from "react";
import PropTypes from "prop-types";

/**
 * Functional react component for congratulatory success message.
 * @funtion
 * @param {object} props – React props.
 * @function {JSX.Element} – Rendered component (or 'null' if success prop is false)
 */
const Congrats = props => {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">
          Congratulations! You guessed the secret word!
        </span>
      </div>
    );
  } else {
    return <div data-test="component-congrats"></div>;
  }
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
};

export default Congrats;
