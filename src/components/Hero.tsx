import { Box, Typography, Stack, Paper, Button, useTheme } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function Hero() {
  const theme = useTheme();

  return (
    <Box
      id="hero"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 3, md: 6 },
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
      }}
    >
      <Stack spacing={{ xs: 4, md: 6 }} maxWidth={900} margin="0 auto">
        {/* Introduction */}
        <Typography
          variant="h3"
          fontWeight="bold"
          textAlign="center"
          sx={{
            fontSize: { xs: "1.75rem", md: "2.5rem" },
            lineHeight: 1.2,
          }}
        >
          Hi, I’m <strong>Brayden</strong>
        </Typography>

        <Typography
          variant="h6"
          textAlign="center"
          sx={{
            fontSize: { xs: "1.125rem", md: "1.5rem" },
            lineHeight: 1.5,
            color: theme.palette.text.secondary,
          }}
        >
          Full-Stack Developer | Creative Problem Solver | Innovator
        </Typography>

        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography
            variant="body1"
            textAlign="center"
            sx={{
              fontSize: { xs: "1rem", md: "1.125rem" },
              lineHeight: 1.6,
              maxWidth: 700,
            }}
          >
            I build seamless digital experiences, solve complex problems, and
            turn ideas into reality—one line of code at a time.
          </Typography>
        </Box>

        {/* Call-to-action buttons */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={2}
          justifyContent="center"
        >
          <Button
            variant="contained"
            color="primary"
            sx={{ px: 4, py: 1.5 }}
            href="#contact"
          >
            Contact Me
          </Button>
          <Button
            variant="outlined"
            color="primary"
            sx={{ px: 4, py: 1.5 }}
            component={RouterLink}
            to="/work"
          >
            View Work
          </Button>
        </Stack>

        {/* Key Skills / Attributes */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 2, sm: 3 }}
          justifyContent="center"
          flexWrap="wrap"
          mt={4}
        >
          {[
            {
              title: "Full-Stack Development",
              description:
                "Building scalable, maintainable applications with React, Node.js, and modern technologies.",
            },
            {
              title: "Problem Solving",
              description:
                "Tackling complex challenges and delivering efficient, elegant solutions.",
            },
            {
              title: "Innovation",
              description:
                "Exploring new ideas, technologies, and creative approaches to development.",
            },
          ].map((item) => (
            <Paper
              key={item.title}
              elevation={3}
              sx={{
                p: { xs: 2, md: 3 },
                flex: { xs: "1 1 auto", sm: "1 1 250px" },
                textAlign: "center",
                borderRadius: 2,
                backgroundColor: theme.palette.background.paper,
                color: theme.palette.text.primary,
              }}
            >
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {item.title}
              </Typography>
              <Typography variant="body2">{item.description}</Typography>
            </Paper>
          ))}
        </Stack>
      </Stack>
    </Box>
  );
}
