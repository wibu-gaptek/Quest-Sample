import React from "react";
import PropTypes from "prop-types";

function Button({ label }) {
  return <div className="text-red-500">{label}</div>;
}

Button.propTypes = {
  label: PropTypes.string,
};

export default Button;
