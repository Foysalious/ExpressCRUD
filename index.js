const mysql=require('mysql');
const express=require('express');
var app= express();
const bodyparser= require('body-parser');
app.use(bodyparser.json());

var mysqlConnection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database: 'employeedb'
});
mysqlConnection.connect((err)=>{
  if(!err)
  console.log('DB Connected');
  else {
    console.log('Connection Failed'+JSON.stringfy(err,undefined,2));
  }
});

app.listen(3000,()=>console.log('Express Server is Running  at port no :3000'));

//Get All Employee
app.get('/employees',(req,res)=>{
  mysqlConnection.query('SELECT * From employee',(err,rows,fields)=>{
    if (!err)
      res.send(rows);

    else
      console.log(err);

  })
});

//Get an Employees
app.get('/employees/:id',(req,res)=>{
  mysqlConnection.query('SELECT * From employee where EmpID=?',[req.params.id],(err,rows,fields)=>{
    if (!err)
      res.send(rows);

    else
      console.log(err);

  })
});
