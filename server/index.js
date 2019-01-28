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

  app.get("/account", api.account.get);
  app.post("/account", api.account.post);
  app.patch("/account", api.account.patch);
  app.delete("/account", api.account.remove);
  app.get("/task", api.task.get);
  app.post("/task", api.task.post);
  app.patch("/task", api.task.patch);
  app.delete("/task", api.task.remove);

  app.get("/*", (req, res) => {
    const url = req.params[0] ? `dist/${req.params[0]}` : `dist/index.html`;
    res.sendFile(url, { root });
  });
}

main();
