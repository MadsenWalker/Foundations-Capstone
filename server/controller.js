const express = require("express")
const cors = require("cors")
const axios = require("axios")

const app = express();


app.use(express.json());
app.use(express.static(`${__dirname}/public`));

app.listen(//enter port number// 
, () => {
    consol.log('Listening on //port number//')
});