const express = require("express");
const mongoose = require("mongoose");

const app = express();

const port = process.env.PORT || 3000;
const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT } = process.env;

app.get("/", (req, res) => {
  res.send("<h1>Hi from app.........<h1>");
});

async function main() {
  // const dbUrl = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;
  // const dbUrl = process.env.MONGO_URI;

  const dbUrl =
    "mongodb+srv://rohitsharma02p:root@cluster0.vlywwe0.mongodb.net/?appName=Cluster0";
  const clientOptions = {
    serverApi: { version: "1", strict: true, deprecationErrors: true },
  };

  await mongoose
    .connect(dbUrl, clientOptions)
    .then(() => console.log("connected to db"))
    .catch((err) => console.log(err));
}

main()
  .then(() => {
    app.listen(port, () => {
      console.log(`app is listening on port ${port}`);
    });
  })
  .catch((err) => console.log(err));
