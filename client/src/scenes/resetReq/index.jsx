import React from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ResetRequest = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleNavigateToSignIn = () => {
    navigate("/login");
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: theme.palette.background.alt,
          padding: "2rem",
          borderRadius: "0.55rem",
          boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          variant="h4"
          sx={{ textAlign: "center", marginBottom: "1rem" }}
        >
          Email Verification Sent
        </Typography>

        <Typography
          variant="body1"
          sx={{ textAlign: "center", marginBottom: "1rem" }}
        >
          A verification mail has been sent to the provided address. Please check
          your inbox.
        </Typography>

        <Button
          fullWidth
          variant="contained"
          color="secondary"
          onClick={handleNavigateToSignIn}
          sx={{ padding: "0.8rem", fontWeight: "bold" }}
        >
          Navigate to Sign In
        </Button>
      </Box>
    </Container>
  );
};

export default ResetRequest;
