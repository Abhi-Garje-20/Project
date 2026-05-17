
const mysql2 = require("mysql2");
const express = require("express");

const app = express();

const connection = mysql2.createConnection({

        host : 'localhost',
        user : 'root',
        database : 'college',
        password : 'Abhi123'
});

app.set("view engine","ejs");

let q = "INSERT INTO `candidate` (name,aadhar_number,email) VALUES ?";

let candidate = [
                  ["Abhishek",657843902645,"garjeabhishek93@gmail.com"],
                  ["Radhika",875784312567,"radhika76@gmail.com"],   
                  ["Sarthak",657843902645,"saruxxx@gmail.com"],
                  ["Shubham",875784312567,"shubham@gmail.com"], 
                  ["Om",657843902645,"om77@gmail.com"],
                  ["Aniket",875784312567,"Aniket78@gmail.com"]
            ];

app.get("/",(req,res) => {

             const q = "SELECT * FROM candidate";

              try{
                  
                 connection.query(q,[candidate],(err,result) =>{

                         if(err) throw err;
                         const data = result;
                         res.render("index.ejs",{data});
                 });
            }
            catch(err){
                  console.log(err);
            }
})

app.listen("8080",() => {
      console.log("server is listening");
});