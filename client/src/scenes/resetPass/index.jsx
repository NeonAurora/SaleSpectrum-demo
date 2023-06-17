import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ResetPass = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordUpdate = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      console.error("Passwords do not match");
      // Show an error message to the user
      return;
    }

    // Send the new password to the backend to update it

    // After the password is updated, navigate to the login page
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
        component="form"
        onSubmit={handlePasswordUpdate}
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
          Reset Password
        </Typography>

        <TextField
          fullWidth
          label="New Password"
          type="password"
          margin="normal"
          required
          variant="outlined"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          sx={{ marginBottom: "1rem" }}
        />

        <TextField
          fullWidth
          label="Confirm Password"
          type="password"
          margin="normal"
          required
          variant="outlined"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <Button
          fullWidth
          variant="contained"
          color="secondary"
          type="submit"
          sx={{ padding: "0.8rem", fontWeight: "bold" }}
        >
          Update New Password
        </Button>
      </Box>
    </Container>
  );
};

export default ResetPass;
