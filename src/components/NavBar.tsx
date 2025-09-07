import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { Link, useLocation, useNavigate } from "react-router-dom";

interface NavbarProps {
  mode: "light" | "dark";
  setDarkMode: (val: boolean) => void;
}

export default function Navbar({ mode, setDarkMode }: NavbarProps) {
  const location = useLocation();
  const navigate = useNavigate();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navLinks = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Contact", id: "contact" },
    { label: "Work", path: "/work" },
    { label: "Resume", path: "/resume" },
  ];

  const handleScroll = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: "smooth" });
    }
    setDrawerOpen(false);
  };

  const darkMode = mode === "dark";

  return (
    <>
      <AppBar position="fixed" color="default" elevation={1}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" fontWeight="bold">
            Brayden.dev
          </Typography>

          {/* Desktop Links */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              alignItems: "center",
              gap: 1,
            }}
          >
            {navLinks.map((link) =>
              link.id ? (
                <Button
                  key={link.label}
                  onClick={() => handleScroll(link.id!)}
                  color="inherit"
                >
                  {link.label}
                </Button>
              ) : (
                <Button
                  key={link.label}
                  component={Link}
                  to={link.path!}
                  color="inherit"
                >
                  {link.label}
                </Button>
              )
            )}
            <IconButton onClick={() => setDarkMode(!darkMode)} color="inherit">
              {!darkMode ? <Brightness7 /> : <Brightness4 />}
            </IconButton>
          </Box>

          {/* Mobile Hamburger */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton onClick={() => setDrawerOpen(true)} color="inherit">
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: { borderRadius: "0px 0px 0px 0px", width: 240 }, // no border radius
        }}
      >
        <List>
          {navLinks.map((link) =>
            link.id ? (
              <ListItem key={link.label} disablePadding>
                <ListItemButton onClick={() => handleScroll(link.id!)}>
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </ListItem>
            ) : (
              <ListItem key={link.label} disablePadding>
                <ListItemButton
                  component={Link}
                  to={link.path!}
                  onClick={() => setDrawerOpen(false)}
                >
                  <ListItemText primary={link.label} />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
        <Divider />
        <Box sx={{ display: "flex", justifyContent: "center", py: 1 }}>
          <IconButton onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Box>
      </Drawer>
    </>
  );
}
