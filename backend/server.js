import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
const app = express();
const PORT = process.env.PORT || 8000;

dotenv.config();

app.use(express.json()); //to parse incoming request with JSON payloads from res.body
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.send("hello weoooo!!!!!!");
});

app.listen(PORT, () => {
  connectToMongoDB();

  console.log(`server running on port ${PORT}`);
});
