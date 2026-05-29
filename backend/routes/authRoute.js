const express = require("express");

const router = express.Router();

const {
  signup,
  login,
  adminLogin,
  forgotPassword,
  resetPassword,
} = require("../controllers/authController");


// USER SIGNUP
router.post(
  "/signup",
  signup
);


// USER LOGIN
router.post(
  "/login",
  login
);


// ADMIN LOGIN
router.post(
  "/admin-login",
  adminLogin
);


module.exports = router;