const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/user");

const router = express.Router();

// POST /api/auth/register
router.post("/register", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      dob,
      gender,
      email,
      password,
      confirmPassword,
      role,
    } = req.body;

  
    if (
      !firstName ||
      !lastName ||
      !dob ||
      !gender ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      return res.status(400).json({ message: "All fields are required." });
    }

    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ message: "Password and confirmation do not match." });
    }

    // check email
    const existing = await User.findOne({ email });
    if (existing) {
      return res
        .status(409)
        .json({ message: "An account with this email already exists." });
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    // create user
    const user = new User({
      firstName,
      lastName,
      dob,
      gender,
      email,
      password: hashed,
      role: role || "user",
    });

    await user.save();

    // response
    return res.status(201).json({
      message: "User registered successfully.",
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error("Register error:", err);
    return res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;