import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { configDotenv } from "dotenv";
import userRoutes from "./routes/userRoutes.js";
configDotenv();
const PORT = process.env.PORT;
const app = express();

app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
