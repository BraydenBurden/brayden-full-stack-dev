import React from "react";
import {
  Box,
  Typography,
  Button,
  Tooltip,
  useTheme,
  useMediaQuery,
  Stack,
} from "@mui/material";
import { DownloadOutlined } from "@ant-design/icons";

export default function Resume() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      id="resume"
      component="section"
      sx={{
        minHeight: "100vh",
        py: { xs: 8, md: 12 },
        px: { xs: 3, md: 6 },
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {/* Section Header */}
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        gutterBottom
      >
        My Resume
      </Typography>

      {/* Divider Line */}
      <Box
        sx={{
          width: 60,
          height: 4,
          bgcolor: theme.palette.primary.main,
          borderRadius: 2,
          mb: 6,
        }}
      />

      {/* Resume Pages */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={isMobile ? 4 : 6}
        justifyContent="center"
        alignItems="flex-start"
        sx={{ width: "100%", maxWidth: 1000 }}
      >
        {/* Page 1 */}
        <Box
          component="img"
          src="/resume_image.png"
          alt="Brayden Burden's Resume - Page 1"
          sx={{
            width: "100%",
            maxWidth: "480px",
            height: "auto",
            borderRadius: 3,
            boxShadow: 6,
            objectFit: "cover",
          }}
        />

        {/* Page 2 */}
        <Box
          component="img"
          src="/resume_image2.png"
          alt="Brayden Burden's Resume - Page 2"
          sx={{
            width: "100%",
            maxWidth: "480px",
            height: "auto",
            borderRadius: 3,
            boxShadow: 6,
            objectFit: "cover",
          }}
        />
      </Stack>

      {/* Download Button */}
      <Tooltip arrow title="Download Resume">
        <Button
          variant="contained"
          color="primary"
          href="/Brayden_Burden_Resume.pdf"
          download="Brayden_Burden_Resume.pdf"
          sx={{ mt: 4 }}
          startIcon={<DownloadOutlined />}
        >
          Download Resume
        </Button>
      </Tooltip>
    </Box>
  );
}
