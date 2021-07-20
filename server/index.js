const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();

app.use(express.static("public"));

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Teddybear@24",
    database: "reactTask"
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/api/get", (req, res) => {
    
    const sqlSelect = "Select * from NOTES";
    db.query(sqlSelect, (err, result) => {
         res.send(result);
    });
});

app.post("/api/insert", (req, res) => {
    const title = req.body.title;
    const content = req.body.content;
    const sqlInsert = "INSERT into NOTES (title, content) values (?, ?)"
    db.query(sqlInsert, [title, content], (err, result) => {
         console.log(err);
    });
});



app.listen(3001,() => {
    console.log("Server running on port 3001");
});
