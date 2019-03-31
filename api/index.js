const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("./config/db");
const app = express();

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

//route

const posts = require("./modules/posts/routes");
app.use("/api/posts", posts);
const email = require("./modules/email/routes");
app.use("/api/email", email);

const port = process.env.port || 3000;

app.listen(port, () => `Server in pott ${port}`);
