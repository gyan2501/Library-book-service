const express = require("express");
require("dotenv").config();
const { connection } = require("./config/db");
const { BookRouter } = require("./routes/Book.Routes");
const app = express();
app.use(express.json());

// calling the books router with /books API endpoint
app.use("/books", BookRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Connected to DB!");
  } catch (error) {
    console.log(error);
    console.log("Not able to connect to DB!");
  }
  console.log(`Server running on Port ${process.env.PORT}`);
});
