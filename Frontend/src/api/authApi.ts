import axios from "axios";

const API = axios.create({
  baseURL: "/api",
});

// Signup API
export const signupUser = async (
  data: any
) => {

  return API.post(
    "/signup",
    data
  );

};

// User Login API
export const loginUser = async (
  data: any
) => {

  return API.post(
    "/login",
    data
  );

};

// Admin Login API
export const adminLogin = async (
  data: any
) => {

  return API.post(
    "/admin-login",
    data
  );

};