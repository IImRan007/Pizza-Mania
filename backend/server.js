const express = require("express");
require("dotenv").config();
const PORT = process.env.PORT || 8000;
require("colors");
const cors = require("cors");
const shortid = require("shortid");
const Razorpay = require("razorpay");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDb = require("./config/db");
const cloudinary = require("cloudinary").v2;
const fileUpload = require("express-fileupload");
const path = require("path");

cloudinary.config({
  cloud_name: "dxazzitas",
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Connect to databse
connectDb();

const app = express();

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/cart", require("./routes/cartRoutes"));

const razorpay = new Razorpay({
  key_id: "rzp_test_o05Pgdf286j2Pl",
  key_secret: "SWljt4PzToaUySsTwuPwO3HE",
});

app.post("/razorpay", async (req, res) => {
  const { price } = req.body;
  const payment_capture = 1;
  const amount = parseInt(price);
  const currency = "INR";

  const options = {
    amount: amount * 100,
    currency: currency,
    receipt: shortid.generate(),
    payment_capture,
  };

  console.log(typeof options.amount);

  try {
    const response = await razorpay.orders.create(options);
    console.log(response);
    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (error) {
    console.log(error);
  }
});

// Serve Frontend
if (process.env.NODE_ENV === "production") {
  // Set build folder as static
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  // FIX: below code fixes app crashing on refresh in deployment
  app.get("*", (_, res) => {
    res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
  });
} else {
  app.get("/", (_, res) => {
    res.status(200).json({ message: "Welcome to the Pizza Mania API" });
  });
}

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Connected to port:${PORT}`.blue);
});
