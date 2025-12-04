import express from "express";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";
import sensorRoutes from "./routes/sensorRoutes.js";
import cors from "cors";
 
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./routes/auth");

const app = express();

// middlewares
app.use(cors()); 
app.use(express.json()); 

// routes
app.use("/api/auth", authRoutes); 
app.use("/api/events", eventRoutes);
app.use("/api/sensors", sensorRoutes);


// connect mongo and start server
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT, () =>
      console.log(`Server running on port ${process.env.PORT}`)
    );
  })
  .catch((err) => {
    console.error("Mongo error:", err.message);
  });
// Routes (empty for now)
app.get("/", (req, res) => {
  res.send("Backend is running...");
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));