const express = require("express");
require("dotenv").config();
const cors = require("cors");
const path = require("path");
const testRouter = require("./routes/test.router");
const ownerRouter = require("./routes/owner.router");
const listsRouter = require("./routes/lists.router");

const app = express();
app.use(express.json());
app.use(cors());

const pubDir = path.join(__dirname, "./build");
app.use(express.static(pubDir));

require("./db/mongoose");

// TODO add routers
app.use("/api/owner", ownerRouter);
app.use("/api/lists", listsRouter);
app.use("/api/test", testRouter);

// add default routing - 404 page
// TODO figure out how errors should look like
app.use((req, res) => {
  res.status(404).send({ error: "no such request" });
});

// start listening
const port = process.env.PORT;
app.listen(port, () => console.log(`listening to port ${port}...`));
