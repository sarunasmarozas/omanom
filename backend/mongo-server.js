const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const port = process.env.port || 5000;
const databaseRouter = require("./routes");
const connection = mongoose.connection;

require("dotenv").config();
const uri = process.env.MONGO_DB_ACCESS_KEY;

app.use(cors());
app.use(express.json());
app.use("/api", databaseRouter);

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

connection.once("open", () => {
  console.log("MongoDB connection established successfully");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
