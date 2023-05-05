//npm install express mongoose ejs dotenv
//npm install --save-dev nodemon

//"start": "nodemon server.js"

//Declare Variables
const express = require("express");
const app = express();
const PORT = 8000;
const mongoose = require("mongoose");
const connectDB = require("./config/database");
const TodoTask = require("./models/todotask");
const homeRoutes = require("./routes/home");
const editRoutes = require("./routes/edit");
require("dotenv").config({ path: "./config/.env" });

// Connection to Database
connectDB();

//Set Middleware
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// Set Routes
app.use("/", homeRoutes);
app.use("/edit", editRoutes);

//Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));