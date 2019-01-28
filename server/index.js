const api = require("./api");
const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const process = require("process");

const root = `${__dirname}/..`;
const port = process.env.PORT || "4096";
const listenAddr = process.env.LISTEN_ADDR || "127.0.0.1";

async function main() {
  const app = express();
  app.use(morgan("dev"));
  app.use(bodyParser.json());
  app.listen(port, listenAddr);
  app.use("/account", api.account.get);
  app.get("/*", (req, res) => {
    const url = req.params[0] ? `dist/${req.params[0]}` : `dist/index.html`;
    res.sendFile(req.params[0] || "dist/index.html", { root });
  });
}

main();
