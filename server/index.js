// require packages

const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const { SERVER_PORT } = process.env;

const { getWeeks } = require("./controller");

app.use(express.json());
// app.use(express.static(`${__dirname}/client`));
app.use(cors())



app.get()
app.post()

app.listen(SERVER_PORT, () => console.log(`Listening on ${SERVER_PORT}`));
