import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { useTheme } from "@mui/system";
import userService from "services/usersService";
import TransactionEntry from "components/Users/TransactionEntry";

const UserInsertion = () => {
  const theme = useTheme();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    city: "",
    state: "",
    country: "",
    occupation: "",
    phoneNumber: "",
    transactions: [""],
    role: "admin",
  });
  const occupations = [
    "Doctor",
    "Engineer",
    "Teacher",
    "Developer",
    "Designer",
    "Manager",
    "Salesperson",
  ];
  const getRandomString = (length) => {
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";

    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }

    return result;
  };

  const handleTransactionChange = (index, value) => {
    setUserData((prevUserData) => {
      const updatedTransactions = prevUserData.transactions.map(
        (transaction, i) => {
          if (i === index) {
            return value;
          }
          return transaction;
        }
      );
      return { ...prevUserData, transactions: updatedTransactions };
    });
  };

  const removeTransaction = (index) => {
    setUserData((prevUserData) => {
      const updatedTransactions = prevUserData.transactions.filter(
        (_, i) => i !== index
      );
      return { ...prevUserData, transactions: updatedTransactions };
    });
  };
  const createTransactionEntry = () => {
    const entry = "";
    setUserData((prevUserData) => {
      return {
        ...prevUserData,
        transactions: [...prevUserData.transactions, entry],
      };
    });
  };

  const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log("User data:", userData);
      await userService.addUser(userData);
      alert("User data submitted successfully");
    } catch (error) {
      alert("Error submitting user data: " + error.message);
    }
  };
  const generateRandomTransactions = (count) => {
    const randomStrings = [];
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (let i = 0; i < count; i++) {
      let randomString = "";
      for (let j = 0; j < 24; j++) {
        randomString += characters.charAt(
          Math.floor(Math.random() * characters.length)
        );
      }
      randomStrings.push(randomString);
    }

    return randomStrings;
  };

  const handleEntryTest = () => {
    const randomName = getRandomString(10);
    const randomEmail = getRandomString(5) + "@" + getRandomString(6) + ".com";
    const randomPassword = getRandomString(8);
    const randomCity = getRandomString(5);
    const randomState = getRandomString(5);
    const randomCountry = getRandomString(5);
    const randomOccupation =
      occupations[getRandomInt(0, occupations.length - 1)];
    const randomPhoneNumber = getRandomInt(10000000, 99999999).toString();
    const randomRole = "admin";
    const randomTransactions = generateRandomTransactions(getRandomInt(1, 10));

    setUserData({
      name: randomName,
      email: randomEmail,
      password: randomPassword,
      city: randomCity,
      state: randomState,
      country: randomCountry,
      occupation: randomOccupation,
      phoneNumber: randomPhoneNumber,
      transactions: randomTransactions,
      role: randomRole,
    });
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
      <Typography variant="h4">Add User</Typography>
      <Box component="form" width="100%" onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <TextField
            name="name"
            label="Name"
            value={userData.name}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            name="email"
            label="Email"
            type="email"
            value={userData.email}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            name="password"
            label="Password"
            type="password"
            value={userData.password}
            onChange={handleChange}
            required
            fullWidth
          />
          <TextField
            name="city"
            label="City"
            value={userData.city}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            name="state"
            label="State"
            value={userData.state}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            name="country"
            label="Country"
            value={userData.country}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            name="occupation"
            label="Occupation"
            value={userData.occupation}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            name="phoneNumber"
            label="Phone Number"
            value={userData.phoneNumber}
            onChange={handleChange}
            fullWidth
          />
          {userData.transactions.map((transaction, index) => (
            <TransactionEntry
              key={index}
              index={index}
              transaction={transaction}
              onTransactionDataChange={handleTransactionChange}
              onRemove={removeTransaction}
            />
          ))}
          <Button
            type="button"
            onClick={createTransactionEntry}
            sx={{
              backgroundColor: theme.palette.secondary[300],
              marginTop: "1rem",
              alignSelf: "flex-start",
            }}
          >
            Add Category
          </Button>

          <TextField
            name="role"
            label="Role"
            select
            value={userData.role}
            onChange={handleChange}
            fullWidth
            SelectProps={{
              native: true,
            }}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="superadmin">Superadmin</option>
          </TextField>
        </Box>
        <Box>
          <Button
            type="button"
            onClick={handleEntryTest}
            sx={{
              backgroundColor: theme.palette.secondary[300],
              marginTop: "1rem",
              mr: "1rem",
            }}
          >
            Entry Test
          </Button>
          <Button
            type="submit"
            sx={{
              backgroundColor: theme.palette.secondary[300],
              marginTop: "1rem",
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default UserInsertion;
