const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

const mainRoutes = require("./routes/main.routes");
app.use("/", mainRoutes);

// ❗ IMPORTANT
module.exports = app;