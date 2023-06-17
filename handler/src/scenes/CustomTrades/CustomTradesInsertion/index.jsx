import React, { useState, useEffect } from "react";
import customTradeService from "services/customTradeService";
import { Box, TextField, Typography, Button } from "@mui/material";
import { useTheme } from "@mui/system";

const CustomTradeInsertion = () => {
  const [customTradeData, setCustomTradeData] = useState({
    name: "",
    address: "",
    city: "",
    zipCode: "",
    assignedAgent: "",
    type: "",
    price: "",
    arv: "",
    roof: "",
    tenants: "",
    mortgage: "",
    monthlyPayments: "",
    timeToSell: "",
    comps: "",
    acquisition: "",
    performance: "",
    phoneNumber: "",
    url: "",
  });

  const theme = useTheme();
  const [audioFile, setAudioFile] = useState(null);
  const [audioMetadata, setAudioMetadata] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("audio", audioFile);
    formData.append(
      "customTradeData",
      JSON.stringify({ ...customTradeData, ...audioMetadata })
    );

    try {
      const response = await customTradeService.addCustomTrade(formData);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCustomTradeData((prevData) => ({ ...prevData, [name]: value }));
  };

  const generateRandomData = () => {
    const randomString = (length) =>
      Math.random().toString(36).substr(2, length);

    const randomPhoneNumber = () =>
      `(${Math.floor(Math.random() * 900 + 100)}) ${Math.floor(
        Math.random() * 900 + 100
      )}-${Math.floor(Math.random() * 9000 + 1000)}`;

    return {
      name: randomString(5),
      address: `${randomString(4)} ${randomString(6)} St`,
      city: randomString(6),
      zipCode: `${Math.floor(Math.random() * 90000 + 10000)}`,
      assignedAgent: randomString(8),
      type: randomString(5),
      price: `${Math.floor(Math.random() * 1000000 + 10000)}`,
      arv: `${Math.floor(Math.random() * 1000000 + 10000)}`,
      roof: randomString(5),
      tenants: randomString(5),
      mortgage: randomString(5),
      monthlyPayments: `${Math.floor(Math.random() * 10000 + 500)}`,
      timeToSell: `${Math.floor(Math.random() * 12 + 1)} months`,
      comps: randomString(5),
      acquisition: randomString(5),
      performance: randomString(5),
      phoneNumber: randomPhoneNumber(),
      url: `https://${randomString(6)}.com`,
    };
  };

  const handleEntryTest = () => {
    setCustomTradeData(generateRandomData());
  };

  return (
    <Box
      className="App"
      sx={{
        backgroundColor: theme.palette.primary[600],
        color: theme.palette.secondary[300],
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
      }}
    >
      <Box component="form" width="100%">
        {Object.keys(customTradeData).map((key) => (
          <React.Fragment key={key}>
            <Typography variant="h6">{key}:</Typography>
            <TextField
              type="text"
              name={key}
              value={customTradeData[key]}
              onChange={handleInputChange}
              fullWidth
            />
          </React.Fragment>
        ))}

        <Box>
          <Typography variant="h6">Audio File:</Typography>
          <input
            type="file"
            accept="audio/*"
            onChange={(e) => setAudioFile(e.target.files[0])}
          />
        </Box>
      </Box>

      <Box>
        <Button
          type="button"
          onClick={handleEntryTest}
          sx={{
            backgroundColor: theme.palette.secondary[300],
            marginTop: "1rem",
            marginRight: "1rem",
          }}
        >
          Entry Test
        </Button>
        <Button
          type="submit"
          onClick={handleSubmit}
          sx={{
            backgroundColor: theme.palette.secondary[300],
            marginTop: "1rem",
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default CustomTradeInsertion;
