const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const memberRoute = require("./routes/members");
const sendEmailRoute = require("./routes/email/sendEmail");

dotenv.config();
app.use(express.json());

// Please add this statement to the ".env" file in the same directory,create one if you dont already have
//  MONGO_URL = 

mongoose
    .connect(process.env.MONGO_URL)
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));

app.use("/server/members", memberRoute);
app.use("/server/email/sendEmail", sendEmailRoute);

app.listen("5500",() => {
    console.log("Backend is running");
})