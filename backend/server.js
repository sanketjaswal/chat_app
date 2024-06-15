// const express = require("express");
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import authroutes from "./routes/auth.routes.js";
import messageroutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "../db/connetToMongoDB.js";
import { app, server } from "./socket/socket.js";

dotenv.config();

// app.use(cors({ origin: "http://localhost:3000" }));
const PORT = process.env.PORT || 5000;
// const PORT = 5000;

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authroutes);
app.use("/api/messages", messageroutes);
app.use("/api/users", userRoutes);

// app.get("/", (req, res) => {
//   res.send("Hello gg wrold");
// });

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`server running in port ${PORT}`);
});
