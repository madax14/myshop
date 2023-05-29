require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const concurrently = require("concurrently");
const PORT = process.env.PORT || 3030;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const data = [
    {
        "Key":2,
        "Book": "Papel B",
        "Price": 25
    },
    {
        "Key":2,
        "Book": "Ferro",
        "Price": 10
    }];


app.get("/api/books", function (req, res) {
    res.json(data);
});

app.post("/addBook", function (req, res) {
    res.end("na")
});

app.listen(PORT, function (req, res) {
    console.log(`server started on port ${PORT}`);
});