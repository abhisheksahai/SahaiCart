import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";
import { useState } from "react";
import { Catalog } from "../../features/Catalog";
import { Header } from "./Header";

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const palletType = darkMode ? "dark" : "light";
  const theme = createTheme({
    palette: {
      mode: palletType,
      background: {
        default: palletType === "light" ? "#eaeaea" : "#121212",
      },
    },
  });

  function onThemeChange() {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={darkMode} onThemeChange={onThemeChange} />
      <Container>
        <Catalog />
      </Container>
    </ThemeProvider>
  );
}

export default App;
