// const express = require("express");
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authroutes from "./routes/auth.routes.js";
import messageroutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "../db/connetToMongoDB.js";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authroutes);
app.use("/api/messages", messageroutes);
app.use("/api/users", userRoutes);

// app.get("/", (req, res) => {
//   res.send("Hello gg wrold");
// });

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`server running in port ${PORT}`);
});
