require("dotenv").config();
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const app = express();
const connectDB = require("./config/db");
app.use(express.static(path.join(__dirname, "../Frontend/dist")));
dotenv.config();

// CORS
app.use(cors());


// Middleware
app.use(express.json());


// Database Connection
connectDB();


// Routes
const authRoutes = require("./routes/authRoutes");

app.use("/api", authRoutes);

app.use(express.static(path.join(__dirname, "../Frontend/dist")));

// app.get("/{*any}", (req, res) => {
//   res.sendFile(path.join(__dirname, "../Frontend/dist/index.html"));
// });

app.get("/*splat", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../Frontend/dist/index.html")
  );
});
app.get("/", (req, res) => {
  res.send("API Running");
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});