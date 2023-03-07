const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT || 8000;
require("colors");
const cors = require("cors");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDb = require("./config/db");

// Connect to databse
connectDb();

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.get("/", (_, res) => {
  res.status(200).json({ message: "Welcome to the Pizza Mania API" });
});

// Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/products", require("./routes/productRoutes"));

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Connected to port:${PORT}`.blue);
});
