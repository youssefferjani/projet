const express = require("express");
const connectdb = require("./config/connectdb");
const clientRoute = require("./routes/client");
const ProductRoute = require("./routes/product");

const app = express();
require("dotenv").config();

const port = process.env.port;

app.use(express.json());

connectdb();
app.use("/client", clientRoute);
app.use("/product", ProductRoute);

app.listen(port, console.log(`app is running on port ${port}`));