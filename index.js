const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const connection = require("./db");
const userRoutes = require("./routes/userRoutes");
const postRoutes = require("./routes/postRoutes");

app.use(express.json());
app.use(express.text());
app.use(cors());

app.get("/", (req, res) => {
  try {
    return res.status(200).send("Homepage...");
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
});

app.use("/users", userRoutes);
app.use("/posts", postRoutes);

app.listen(process.env.PORT, () => {
  try {
    connection();

    console.log(`Server is runing on port ${process.env.PORT}`);
  } catch (error) {
    console.log({ error: error.message });
  }
});
