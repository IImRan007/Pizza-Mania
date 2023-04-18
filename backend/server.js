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

cloudinary.config({
  cloud_name: "dxazzitas",
  api_key: "498934386722228",
  api_secret: "0eH3wqgGO_8yd-PkkNl93OEo2mA",
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

app.get("/", (_, res) => {
  res.status(200).json({ message: "Welcome to the Pizza Mania API" });
});

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

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Connected to port:${PORT}`.blue);
});
