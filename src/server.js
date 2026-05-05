import express from "express";
import moviesRoutes from "./routes/moviesRoutes.js";
import { config } from "dotenv";
import { connectDB, disconnectDB } from "./config/db.js";

config();
connectDB();
const app = express();
const PORT = 5001;

// API routes
app.use("/api", moviesRoutes);

app.get("/hello", (req, res) => {
  res.json({
    message: "Hello World",
  });
});
app.listen(PORT, () => {
  console.log(`Server runs on port ${PORT}`);
});

process.on("unhandledRejection", (err) => {
  console.error("Unhandled Rejection", err);
  server.close(async () => {
    await disconnectDB();
    process.exit(1);
  });
});
process.on("uncaughtException", async (err) => {
  console.error("Uncaught Exception", err);
 
    await disconnectDB();
    process.exit(1);

});
process.on("SIGTERM", async() => {
  console.error("SIGTERM received, shutting down gracefully");
  server.close(async () => {
    await disconnectDB();
    process.exit(0);
  });
});
// localhost:5001/
// npx neonctl@latest init
// postgresql://neondb_owner:npg_TnRMq31osrVS@ep-still-shape-ab2o4x2e.eu-west-2.aws.neon.tech/neondb?sslmode=require
// brew install neonctl && neonctl init
