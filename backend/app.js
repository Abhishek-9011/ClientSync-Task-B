const authRoutes = require("./routes/authRoutes");
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "ClientSync API Running"
    });
});

app.use("/api/leads", require("./routes/leadRoutes"));

app.use("/api/auth", authRoutes);

module.exports = app;