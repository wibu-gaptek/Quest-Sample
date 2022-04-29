import React, { createContext, useEffect } from "react";
import propTypes from "prop-types";

export const Context = createContext(null);

const ThemeContextProvider = ({ children, ...props }) => {
  useEffect(() => {
    const changeTheme = (color, backgroundColor) => {
      document.body.style.color = color;
      document.body.style.backgroundColor = backgroundColor;
    };

    if (props.theme === "dark") changeTheme("white", "#171717");
    else changeTheme("#171717", "white");
  }, [props.theme]);

  return <Context.Provider value={props}>{children}</Context.Provider>;
};

const defaultValue = { theme: "dark", setTheme: null };
ThemeContextProvider.defaultProps = defaultValue;

ThemeContextProvider.propsTypes = {
  children: propTypes.node,
  setTheme: propTypes.func,
  theme: propTypes.string,
};

export default ThemeContextProvider;
