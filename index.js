require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const { MONGO_SERVER, PORT } = process.env;

mongoose.connect(
  MONGO_SERVER,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    try {
      console.log("Успешно соединились с сервером MongoDB");
    } catch (err) {
      console.log(`Ошибка при соединении с сервером MongoDB, ${err.message}`);
    }
  }
);
mongoose.set("strictQuery", false);

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use(require("./routes"));

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
