require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const walletRoutes = require("./routes/walletRoutes");
const connectDB = require("./config/db");

const app = express();
app.use(express.json()); // Allows reading JSON data
app.use(cors()); // Allows communication with the frontend

connectDB();

app.use("/api/wallet", walletRoutes);

app.get("/", (req, res) => res.send("MonMon API is Running!"));

app.listen(5000, () => console.log("Server running on port 5000"));
