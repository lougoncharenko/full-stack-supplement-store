const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 3001;
const app = express();
// setting up a mongoose connection
const mongoose = require("mongoose");
app.use(cors())
app.use(express.json())
app.options("*", cors())


mongoose.connect("mongodb+srv://louisagonch:L907-air!@cluster0.azy2re6.mongodb.net/?retryWrites=true&w=majority")

const connection = mongoose.connection;
connection.once("open", function() {
  console.log("Connection with MongoDB was successful");
});

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3002"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.use("/", require("./Route/SupplementRoute"));

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });