import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();
connectDB();
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

// Start the server on port 3000
app.listen(PORT, () => {
  console.log(`Server started listening on port ${PORT}`);
});
