import { Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{ py: 3, textAlign: "center", borderTop: "1px solid #ddd", mt: 6 }}
    >
      <Typography variant="body2" color="text.secondary">
        © {new Date().getFullYear()} Brayden Burden. All rights reserved.
      </Typography>
    </Box>
  );
}
