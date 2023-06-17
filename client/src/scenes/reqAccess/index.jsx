import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import { useCreateAccountRequestMutation } from "state/adminAuditApi";
import { useNavigate } from "react-router-dom";

const RequestAccess = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  // Create state variables for all our form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [occupation, setOccupation] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  // Get our mutation hook from RTK Query
  const [createAccountRequest] = useCreateAccountRequestMutation();

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Call our mutation with the form data
    try {
      await createAccountRequest({
        name,
        email,
        password,
        city,
        state,
        country,
        occupation,
        phoneNumber,
      });
      // If successful, navigate back to the login page
      navigate("/login");
    } catch (error) {
      console.error("Failed to request account:", error);
      // Handle errors, e.g., show a notification
    }
  };

  return (
    <Container
      maxWidth="xs"
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box
        component="form"
        onSubmit={handleSubmit}
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
          Request Access
        </Typography>

        <TextField
          fullWidth
          label="Name"
          margin="normal"
          required
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <TextField
          fullWidth
          label="Email"
          type="email"
          margin="normal"
          required
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          fullWidth
          label="Password"
          type="password"
          margin="normal"
          required
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          fullWidth
          label="City"
          margin="normal"
          required
          variant="outlined"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <TextField
          fullWidth
          label="State"
          margin="normal"
          required
          variant="outlined"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <TextField
          fullWidth
          label="Country"
          margin="normal"
          required
          variant="outlined"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <TextField
          fullWidth
          label="Occupation"
          margin="normal"
          required
          variant="outlined"
          value={occupation}
          onChange={(e) => setOccupation(e.target.value)}
        />
        <TextField
          fullWidth
          label="Phone Number"
          margin="normal"
          required
          variant="outlined"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />

        <Button
          fullWidth
          variant="contained"
          color="secondary"
          type="submit"
          sx={{ marginTop: "2rem", padding: "0.8rem", fontWeight: "bold" }}
        >
          Request Access
        </Button>
      </Box>
    </Container>
  );
};

export default RequestAccess;
