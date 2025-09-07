import { Box, Typography } from "@mui/material";
import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
}

export default function Section({ id, title, children }: SectionProps) {
  return (
    <Box id={id} sx={{ py: 8 }}>
      <Typography variant="h4" gutterBottom fontWeight="bold">
        {title}
      </Typography>
      <Box>{children}</Box>
    </Box>
  );
}
