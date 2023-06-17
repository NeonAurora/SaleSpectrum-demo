import User from "../../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import nodemailer from "nodemailer";

let otpMap = new Map();


export const register = async (req, res) => {
  const {
    name,
    email,
    password,
    city,
    state,
    country,
    occupation,
    phoneNumber,
    role,
  } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User with this email already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      city,
      state,
      country,
      occupation,
      phoneNumber,
      role,
    });
    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Something went wrong. Please try again." });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      console.log("User not found:", email);
      return res.status(404).json({ message: "User not found." });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      console.log("Invalid credentials:", { email, password });
      return res.status(400).json({ message: "Invalid credentials." });
    }

    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    console.log("Login successful:", { result: user, token });
    res.status(200).json({ result: user, token });
  } catch (error) {
    console.error("Login error:", error);
    res
      .status(500)
      .json({ message: "Something went wrong. Please try again." });
  }
};


export const forgotPass = async(req,res) => {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Generate OTP
    const otp = crypto.randomBytes(3).toString('hex');

    // Store OTP in map
    otpMap.set(email, otp);

    // Here you should normally send the OTP to the user's email address

    // For testing purposes we will just send it in the response
    res.status(200).json({ otp });

  } catch (error) {
    res.status(500).json({ message: "Something went wrong. Please try again." });
  }
};


export const verifyOTP = async(req,res) => {
  const { email, otp } = req.body;

  try {
    const validOTP = otpMap.get(email);

    if (!validOTP || validOTP !== otp) {
      return res.status(400).json({ message: "Invalid OTP." });
    }

    res.status(200).json({ message: "OTP verified." });

  } catch (error) {
    res.status(500).json({ message: "Something went wrong. Please try again." });
  }
};


export const resetPass = async(req,res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    user.password = hashedPassword;
    await user.save();

    // Remove the OTP from the map after resetting the password
    otpMap.delete(email);

    res.status(200).json({ message: "Password reset successful." });

  } catch (error) {
    res.status(500).json({ message: "Something went wrong. Please try again." });
  }
};

