import myImage from "../assets/brayden-burden.jpg";
import {
  Box,
  Stack,
  Typography,
  Tooltip,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export default function About() {
  const isMobile = useMediaQuery("(max-width:900px)");
  const theme = useTheme();

  return (
    <Box
      id="about"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
        px: { xs: 3, md: 8 },
        backgroundColor: theme.palette.background.default,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Stack
        direction={isMobile ? "column-reverse" : "row"}
        spacing={isMobile ? 4 : 6}
        alignItems="center"
        maxWidth={1200}
        width="100%"
      >
        {/* Text Section */}
        <Stack flex={1} spacing={3}>
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            gutterBottom
            color={theme.palette.text.primary}
          >
            About Me
          </Typography>

          <Box
            sx={{
              width: 60,
              height: 4,
              bgcolor: theme.palette.primary.main,
              borderRadius: 2,
              mx: isMobile ? "auto" : 0,
            }}
          />

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.125rem" },
              lineHeight: 1.6,
              color: theme.palette.text.secondary,
            }}
          >
            Hey! I'm <strong>Brayden</strong>, a passionate Full-Stack Developer
            focused on building seamless digital experiences. I specialize in
            solving complex problems and turning ideas into reality with clean,
            scalable code.
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.125rem" },
              lineHeight: 1.6,
              color: theme.palette.text.secondary,
            }}
          >
            With experience in modern frameworks, cloud solutions, and API
            development, I create efficient, user-focused applications. Web,
            mobile, or automation—if it’s code, I’m ready for the challenge.
          </Typography>
        </Stack>

        {/* Image Section */}
        <Tooltip arrow title="Brayden Burden">
          <Box
            sx={{
              flex: "0 0 300px",
              borderRadius: 3,
              overflow: "hidden",
              boxShadow: theme.shadows[4],
              mx: isMobile ? "auto" : 0,
            }}
          >
            <Box
              component="img"
              src={myImage}
              alt="Brayden Burden"
              sx={{ width: "100%", height: "auto", display: "block" }}
            />
          </Box>
        </Tooltip>
      </Stack>
    </Box>
  );
}
