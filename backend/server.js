require("dotenv").config();

const express = require("express");

const dotenv = require("dotenv");

const cors = require("cors");

const path = require("path");

const app = express();

const connectDB = require("./config/db");

dotenv.config();


// CORS
app.use(cors());


// Middleware
app.use(express.json());


// Database Connection
connectDB();


// Static Folder
app.use(
  express.static(
    path.join(
      __dirname,
      "../Frontend/dist"
    )
  )
);


// Routes
const authRoutes =
  require("./routes/authRoutes");

app.use(
  "/api",
  authRoutes
);


// HOME ROUTE
app.get("/", (req, res) => {

  res.sendFile(
    path.join(
      __dirname,
      "../Frontend/dist/index.html"
    )
  );

});


// REACT ROUTES
app.get(
  /^\/(?!api).*/,
  (req, res) => {

    res.sendFile(
      path.join(
        __dirname,
        "../Frontend/dist/index.html"
      )
    );

  }
);


const PORT =
  process.env.PORT || 5000;


app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );

});