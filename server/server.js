const express = require("express");
require("dotenv").config();
const cors = require("cors");
const path = require("path");
const testRouter = require("./routes/test.router");
const ownerRouter = require("./routes/owner.router");
const listsRouter = require("./routes/lists.router");
const callbackRouter = require("./routes/callback.router");
const bodyParser = require("body-parser");
const userRouter = require("./routes/user.router");

const app = express();
app.use(express.json());
app.use(cors());

const pubDir = path.join(__dirname, "./build");
app.use(express.static(pubDir));

require("./db/mongoose");

app.get("/something", (req, res) => {
  console.log(req, res);
});
// TODO add routers
app.use("/api/owner", ownerRouter);
app.use("/api/lists", listsRouter);
app.use("/api/user", userRouter);
app.use("/api/test", testRouter);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/callback", callbackRouter);

// add default routing - 404 page
// TODO figure out how errors should look like
app.use((req, res) => {
  res.status(301).redirect(`${window.location.origin}?page=${req.path}`);
});

// start listening
const port = process.env.PORT;
app.listen(port, () => console.log(`listening to port ${port}...`));
