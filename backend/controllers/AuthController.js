const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");
// SIGNUP
exports.signup = async (req, res) => {
console.log("VALIDATION CODE RUNNING");
  try {

    const { name, email, password, role } = req.body;

    let errors = [];

    // NAME VALIDATION
    if (!name || name.length < 3) {

      errors.push({
        field: "name",
        message: "Name must be at least 3 characters",
      });

    }

    // EMAIL VALIDATION
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {

      errors.push({
        field: "email",
        message: "Invalid email format",
      });

    }

    // PASSWORD VALIDATION
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/;

    if (!passwordRegex.test(password)) {

      errors.push({
        field: "password",
        message:
          "Password must contain uppercase, lowercase, number and special character",
      });

    }

    // IF ERRORS
    if (errors.length > 0) {

      return res.status(400).json({
        success: false,
        errors,
      });

    }

    // CHECK USER
    const userExists = await User.findOne({
      email,
    });

    if (userExists) {

      return res.status(400).json({
        success: false,
        message: "User already exists",
      });

    }

    // HASH PASSWORD
    const hashedPassword =
      await bcrypt.hash(password, 10);

    // CREATE USER
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role,
    });

    res.status(201).json({
      success: true,
      message: "User Registered Successfully",
      user,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

};

exports.adminLogin = async (req, res) => {

  try {

    const { email, password } = req.body;

    // CHECK ENV ADMIN EMAIL
    if (
      email !== process.env.ADMIN_EMAIL
    ) {

      return res.status(400).json({
        message: "Invalid Admin Email",
      });

    }

    // CHECK ENV ADMIN PASSWORD
    if (
      password !== process.env.ADMIN_PASSWORD
    ) {

      return res.status(400).json({
        message: "Invalid Admin Password",
      });

    }

    // SUCCESS
    res.status(200).json({
      message: "Admin Login Successful",

      admin: {
        name: "Admin",
        role: "admin",
      },
    });

  } catch (error) {

    console.log("Admin Login Error:", error);

    res.status(500).json({
      error: error.message,
    });

  }

};

// LOGIN
exports.login = async (req, res) => {

  try {

    const { email, password } = req.body;

    // Check user
    const user = await User.findOne({ email });

    if (!user) {

      return res.status(400).json({
        message: "Invalid Email",
      });
    }

    // Compare password
    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {

      return res.status(400).json({
        message: "Invalid Password",
      });
    }

    // Generate token
    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    res.status(200).json({
      message: "Login Successful",
      token,
      user,
    });

  } catch (error) {

    console.log("Login Error:", error);

    res.status(500).json({
      error: error.message,
    });
  }
};
