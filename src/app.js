

const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).send("Mi primer servidor con Express");
});

app.post("/", (req, res) => {
  res.status(200).send("manejo de peticiones POST");
});

app.put("/", (req, res) => {
  res.status(200).send("manejo de peticiones PUT");
});

app.delete("/", (req, res) => {
  res.status(200).send("manejo de peticiones DELETE");
});


const server = app.listen(PORT, () => {
  console.log(`listening on port http://localhost:${PORT}`);
});

module.exports = server;