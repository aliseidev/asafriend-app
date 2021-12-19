const app = require("express")();
const cors = require("cors");
const morgan = require("morgan")(
  ":method :url :status :res[content-length] - :response-time ms"
);
const bodyParser = require("body-parser").json();

const { readFileSync, writeFileSync } = require("fs");
const { join } = require("path");

const PORT = process.env.PORT || 8080;

app.use(morgan);
process.env.NODE_ENV === "development" ? app.use(cors()) : null;

const databaseFile = join(__dirname, "data", "database.json");

app.get("/api/readers", (req, res) => {
  const database = readFileSync(databaseFile, "utf8");
  const readers = JSON.parse(database);
  res.status(200).json(readers);
});

app.post("/api/readers", bodyParser, (req, res) => {
  if (!req.body || req.body.readers.length === 0)
    return res
      .status(400)
      .json({ response: "Something is wrong with the body" });

  writeFileSync(databaseFile, JSON.stringify(req.body));
  res.sendStatus(204);
});

app.get("/health", (req, res) => {
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.info("Server is up! Listening on: " + PORT);
});
