const express = require("express");
const cors = require("cors");
const authRoute = require("./routes/auth.routes");
const { connect } = require("./config/db.config");
const boardRoute = require

require("dotenv").config();

const App = express();

connect();

App.use(cors());
App.use(express.json());

const port = process.env.PORT;

App.use("/auth", authRoute);
App.use(express.json());

App.listen(port, (err) => {
  if (err) throw new Error(err);
  console.log(`Server is running on http://localhost:${port}`);
});
