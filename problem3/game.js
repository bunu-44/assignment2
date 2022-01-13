require("dotenv").config();
const path = require("path");
const express = require("express");
const app = express();


app.use(express.static(path.join(__dirname, "public")));

const server = app.listen(process.env.PORT, function () {
    const port = server.address().port;
    console.log(process.env.MSG_START, port);
});