import { useState } from "react";
import {
  Box,
  Typography,
  Stack,
  Paper,
  Button,
  TextField,
  Link,
  Alert,
  useTheme,
} from "@mui/material";
import {
  FacebookOutlined,
  LinkedinOutlined,
  MailOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const theme = useTheme();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = () => {
    if (!name || !email || !message) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    const templateParams = { name, email, message };

    emailjs
      .send(
        "service_uaqha1s",
        "template_j0uvhzj",
        templateParams,
        "cTl0w_mk1DkqWELAA"
      )
      .then(
        () => {
          setEmailSent(true);
          setName("");
          setEmail("");
          setMessage("");
          setErrorMessage("");
          setTimeout(() => setEmailSent(false), 4000);
        },
        () => {
          setErrorMessage("Failed to send email. Please try again later.");
        }
      );
  };

  return (
    <Box
      id="contact"
      component="section"
      sx={{
        py: { xs: 6, md: 12 },
        px: { xs: 3, md: 6 },
        backgroundColor: theme.palette.background.default,
      }}
    >
      <Stack spacing={5} margin="0 auto">
        <Typography
          variant="h4"
          fontWeight="bold"
          textAlign="center"
          gutterBottom
          color={theme.palette.text.primary}
        >
          Contact Me
        </Typography>

        <Box
          sx={{
            width: 60,
            height: 4,
            bgcolor: theme.palette.primary.main,
            borderRadius: 2,
            mx: "auto",
          }}
        />

        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          justifyContent="space-between"
        >
          {/* Contact Info */}
          <Paper
            elevation={3}
            sx={{
              p: { xs: 2, md: 3 },
              flex: { xs: "1 1 auto", md: "0 0 45%" },
              backgroundColor: theme.palette.background.paper,
              borderRadius: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 2,
              minHeight: { xs: "auto", md: 280 },
            }}
          >
            <Stack spacing={1}>
              <Typography
                variant="h6"
                fontWeight="bold"
                color={theme.palette.text.primary}
              >
                Get in Touch
              </Typography>
              <Typography variant="body2" color={theme.palette.text.secondary}>
                I’m available for freelance projects, collaborations, or just a
                chat. Reach out via email, phone, or social media!
              </Typography>
            </Stack>

            <Stack spacing={1} mt={1.5}>
              {[
                { label: "Fast Response", icon: "⚡" },
                { label: "Freelance & Collaboration", icon: "🤝" },
                { label: "Modern Tech Stack", icon: "💻" },
              ].map((item) => (
                <Stack
                  key={item.label}
                  direction="row"
                  spacing={1}
                  alignItems="center"
                >
                  <Typography>{item.icon}</Typography>
                  <Typography
                    variant="body2"
                    color={theme.palette.text.primary}
                  >
                    {item.label}
                  </Typography>
                </Stack>
              ))}
            </Stack>

            <Stack spacing={1.5} mt={2}>
              <Link
                href="mailto:brayden.burden00@gmail.com"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  color: theme.palette.text.primary,
                }}
              >
                <MailOutlined style={{ color: theme.palette.primary.main }} />
                brayden.burden00@gmail.com
              </Link>
              <Link
                href="tel:+17094545027"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  color: theme.palette.text.primary,
                }}
              >
                <PhoneOutlined style={{ color: theme.palette.primary.main }} />
                +1 (709) 454-5027
              </Link>
              <Link
                href="https://www.linkedin.com/in/brayden-burden-ab2778223/"
                target="_blank"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  color: theme.palette.text.primary,
                }}
              >
                <LinkedinOutlined
                  style={{ color: theme.palette.primary.main }}
                />
                LinkedIn
              </Link>
              <Link
                href="https://www.facebook.com/brayden.burden/"
                target="_blank"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  color: theme.palette.text.primary,
                }}
              >
                <FacebookOutlined
                  style={{ color: theme.palette.primary.main }}
                />
                Facebook
              </Link>
            </Stack>
          </Paper>

          {/* Contact Form */}
          <Paper
            elevation={3}
            sx={{
              p: { xs: 2, md: 3 },
              flex: 1,
              backgroundColor: theme.palette.background.paper,
              borderRadius: 2,
            }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              gutterBottom
              color={theme.palette.text.primary}
            >
              Send a Message
            </Typography>
            <Stack spacing={1.5}>
              <TextField
                label="Name"
                variant="outlined"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <TextField
                label="Message"
                variant="outlined"
                fullWidth
                multiline
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              {errorMessage && (
                <Typography color="error">{errorMessage}</Typography>
              )}
              <Button variant="contained" onClick={sendEmail}>
                Send Message
              </Button>
            </Stack>
          </Paper>
        </Stack>

        {emailSent && (
          <Alert severity="success" sx={{ mt: 2 }}>
            Your message has been sent successfully! I’ll get back to you soon.
          </Alert>
        )}
      </Stack>
    </Box>
  );
}
