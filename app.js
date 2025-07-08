const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const main = require("./mainRouter");
// For parsing application/json
app.use(express.json());

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// const indexRouter = require("./routes/indexRouter");
// const postRouter = require("./routes/postRouter");
// const db = require("./db/queries");

app.use(cors());

// app.use("/", indexRouter);
app.use("/", main);

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Where's Whiskers App - listening on port ${PORT}!`);
});
