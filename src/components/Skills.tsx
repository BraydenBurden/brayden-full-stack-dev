import { Box, Typography, Stack, Tooltip, useTheme } from "@mui/material";

// Example skills array with brief explanations
const skills: { name: string; description: string }[] = [
  {
    name: "React.js",
    description: "A JavaScript library for building user interfaces.",
  },
  {
    name: "Node.js",
    description: "JavaScript runtime for server-side development.",
  },
  {
    name: "JavaScript",
    description: "High-level programming language used for web development.",
  },
  {
    name: "TypeScript",
    description: "Typed superset of JavaScript that compiles to plain JS.",
  },
  {
    name: "Python",
    description:
      "High-level programming language for general-purpose development.",
  },
  {
    name: "SQL & NoSQL",
    description:
      "Database query languages and database types for structured and unstructured data.",
  },
  {
    name: "MongoDB",
    description: "NoSQL database for storing JSON-like documents.",
  },
  {
    name: "Express.js",
    description:
      "Web framework for building server-side applications in Node.js.",
  },
  {
    name: "REST APIs",
    description: "Architectural style for designing networked applications.",
  },
  {
    name: "Material UI",
    description: "React component library for building modern, responsive UIs.",
  },
  {
    name: "AWS",
    description:
      "Cloud computing services for deploying and scaling applications.",
  },
  {
    name: "CI/CD",
    description:
      "Continuous integration and deployment pipelines for automated development workflows.",
  },
  {
    name: "Version Control (Git)",
    description:
      "Tool for tracking code changes and collaborating with others.",
  },
  {
    name: "API Integration",
    description: "Connecting applications to external services via APIs.",
  },
];

export default function Skills() {
  const theme = useTheme();
  const skillSplitNum = Math.ceil(skills.length / 2);

  return (
    <Box
      id="skills"
      component="section"
      sx={{
        py: { xs: 6, md: 12 },
        px: { xs: 3, md: 6 },
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Stack spacing={4} margin="0 auto">
        {/* Section Title */}
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          gutterBottom
          color={theme.palette.text.primary}
        >
          Skills & Technologies
        </Typography>

        {/* Decorative underline */}
        <Box
          sx={{
            width: 60,
            height: 4,
            bgcolor: theme.palette.primary.main,
            borderRadius: 2,
            mx: "auto",
          }}
        />

        {/* Skills Grid */}
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 0, sm: 3 }}
          justifyContent="center"
          flexWrap="wrap"
        >
          {Array.from(
            { length: Math.ceil(skills.length / skillSplitNum) },
            (_, colIndex) => (
              <Stack
                key={colIndex}
                component="ul"
                sx={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  flex: { xs: "1 1 100%", sm: "1 1 200px" },
                }}
              >
                {skills
                  .slice(
                    colIndex * skillSplitNum,
                    colIndex * skillSplitNum + skillSplitNum
                  )
                  .map((skill, index) => (
                    <Tooltip key={index} title={skill.description} arrow>
                      <Box
                        component="li"
                        sx={{
                          py: 1,
                          px: 2,
                          borderRadius: 1,
                          mb: 1,
                          backgroundColor: theme.palette.action.hover,
                          textAlign: "center",
                          fontWeight: 500,
                          color: theme.palette.text.primary,
                          transition: "0.3s",
                          cursor: "default",
                          "&:hover": {
                            backgroundColor: theme.palette.primary.light,
                            color: theme.palette.primary.contrastText,
                          },
                        }}
                      >
                        {skill.name}
                      </Box>
                    </Tooltip>
                  ))}
              </Stack>
            )
          )}
        </Stack>
      </Stack>
    </Box>
  );
}
