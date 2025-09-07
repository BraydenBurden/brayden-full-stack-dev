import { Routes, Route } from "react-router-dom";
import {
  CssBaseline,
  Container,
  Box,
  useMediaQuery,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Resume from "./pages/Resume";
import Navbar from "./components/NavBar";
import { useState, useMemo } from "react";

export default function App() {
  const prefersLightMode = useMediaQuery("(prefers-color-scheme: light)");
  const [darkMode, setDarkMode] = useState(prefersLightMode);

  // Memoize theme to avoid unnecessary recalculations
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          primary: {
            main: "#007FFF",
            light: "#66B2FF",
            dark: "#0059B2",
            contrastText: "#fff",
          },
          secondary: {
            main: "#FF4081",
            light: "#FF79B0",
            dark: "#C60055",
            contrastText: "#fff",
          },
          background: {
            default: darkMode ? "#121212" : "#f5f5f5",
            paper: darkMode ? "#1e1e1e" : "#fff",
          },
          text: {
            primary: darkMode ? "#fff" : "#212121",
            secondary: darkMode ? "#ccc" : "#424242",
          },
        },
        typography: {
          fontFamily: '"Atkinson Hyperlegible Next", sans-serif',
          h1: { fontWeight: 700 },
          h2: { fontWeight: 700 },
          h3: { fontWeight: 700 },
          h4: { fontWeight: 700 },
          h5: { fontWeight: 600 },
          h6: { fontWeight: 600 },
        },
        components: {
          MuiAppBar: {
            styleOverrides: {
              root: {
                borderRadius: 0, // ensures Navbar stays flat
              },
            },
          },
          MuiButton: {
            styleOverrides: { root: { borderRadius: 8 } },
          },
          MuiPaper: {
            styleOverrides: { root: { borderRadius: 12 } },
          },
        },
      }),
    [darkMode]
  );

  // Handler to toggle color mode
  const toggleColorMode = () => setDarkMode((prev) => !prev);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Pass toggleColorMode and darkMode to Navbar */}
      <Navbar
        setDarkMode={toggleColorMode}
        mode={darkMode ? "dark" : "light"}
      />
      <Box sx={{ mt: 10, minHeight: "80vh" }}>
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
        </Container>
      </Box>
      <Footer />
    </ThemeProvider>
  );
}
