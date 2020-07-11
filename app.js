
const path = require('path');
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const app = express();


var connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database: 'node_crud'
});
connection.connect(function(error){
    if(!!error) console.log(error);
    else console.log('Database Connected!');
});
// Server Listening
app.listen(3000, () => {
    console.log('Server is running at port 3000');
});
