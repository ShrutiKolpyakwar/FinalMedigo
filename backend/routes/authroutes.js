const express = require("express");

const router = express.Router();

const authController = require(
  "../controllers/authController"
);

// USER SIGNUP
router.post(
  "/signup",
  authController.signup
);

// USER LOGIN
router.post(
  "/login",
  authController.login
);

// ADMIN LOGIN
router.post(
  "/admin-login",
  authController.adminLogin
);

module.exports = router;