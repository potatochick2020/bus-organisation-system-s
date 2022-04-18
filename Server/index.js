const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const memberRoute = require("./routes/members");
const sendEmailRoute = require("./routes/sendEmail");

dotenv.config();
app.use(express.json());


mongoose
    .connect(process.env.MONGO_URL)
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));

app.use("/server/members", memberRoute);
app.use("/server/sendEmail", sendEmailRoute);

app.listen("5500",() => {
    console.log("Backend is running");
})