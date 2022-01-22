import React from "react";
import Toolbox from "@pages/Toolbox";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

const App: React.FC = (props) => {
  const theme = createTheme({ palette: { mode: "dark" } });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Toolbox />
    </ThemeProvider>
  );
};

export default App;
