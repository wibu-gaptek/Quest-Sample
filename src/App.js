import React from "react";
import ThemeContextProvider, {
  Context as ThemeContext,
} from "./context/ThemeContext";

function App() {
  const [theme, setTheme] = React.useState("dark");

  return (
    <ThemeContextProvider {...{ theme, setTheme }}>
      <></>
    </ThemeContextProvider>
  );
}

export default App;
