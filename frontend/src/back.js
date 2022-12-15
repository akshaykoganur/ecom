const express = require("express");
const bodyParser = require('body-parser');
const cors = require("cors");
 
const app = express();
 
app.use(cors());

app.use(bodyParser.json());
  

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Akshay05@',
  database: 'me'
});

conn.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});
 
 

app.post('/',(req, res) => {
  let data = {name: req.body.name};
  let sql = "INSERT INTO mn SET ?";
  let query = conn.query(sql, data,(err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 
app.listen(3000, () => {
  console.log("Server running successfully on 3000");
});