require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./db/connect.js");
const userRoutes = require("./routes/user.routes.js");
const productRoutes = require("./routes/product.routes.js");
const app = express();

app.use(cors());

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);

connectDB()
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("Server is running on port " + process.env.PORT);
    });
  })
  .catch((error) => {
    console.log("MONGODB connection FAILED ", error);
    process.exit(1);
  });
