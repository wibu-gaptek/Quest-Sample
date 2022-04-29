import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

import style from "./Button.module.css";

export function Button(props) {
  return <button>{props.children}</button>;
}

Button.propTypes = HTMLButtonElement;
