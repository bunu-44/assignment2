require("dotenv").config();
const path = require("path")
const express = require("express");
const app = express();

app.use(express.static(path.join(__dirname, "public")));


app.post("/", function (req, res) {
    console.log("request received");
    res.status(200).json({ "message": "hello" })
});



const server = app.listen(process.env.PORT, function () {
    const port = server.address().port;
    console.log(process.env.MESSAGE, port);
});