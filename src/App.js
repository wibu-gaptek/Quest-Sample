import React from "react";
import ThemeContextProvider, {
  Context as ThemeContext,
} from "./context/ThemeContext";

function App() {
  const [theme, setTheme] = React.useState("dark");

  return (
    <ThemeContextProvider {...{ theme, setTheme }}>
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        teatea
      </button>
    </ThemeContextProvider>
  );
}

export default App;
