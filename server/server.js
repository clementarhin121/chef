const express = require("express");
const joi = require("joi");
const cors = require("cors");
const mysql2 = require("mysql2");
const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 2000;

const db = mysql2.createConnection({
  host: "localhost",
  user: "root",
  database: "chef",
  password: "12345678",
});

app.get("/", (req, res) => {
  res.json("hello, world!");
});

app.get("/db", (req, res) => {
  const mysql = "SELECT * from products";
  db.query(mysql, (err, data) => {
    if (err) return "sorry retry";
    return res.json(data);
  });
});

app.get("/db/:id", (req, res) => {
  const mysql = `select * from products 
                where product_id = ?`;

  const values = [req.params.id];

  db.query(mysql, values, (err, data) => {
    if (err) return "sorry";

    return res.json(data);
  });
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
