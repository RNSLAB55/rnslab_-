const express = require('express');
const app = express();
const path = require('path');

//req.body 읽기(json 형태)
app.use(express.json());
app.use(express.urlencoded({extended : false}));

//mysql 
const getConnection = require('./db');

// port setting
const dotenv = require('dotenv');
dotenv.config();
const basic_port = 3000;

app.set('port', process.env.PORT || basic_port);

app.get('/', (req,res) => {
    res.send('hello, Express');
});

app.post('/getuser', (req,res) => { 
    getConnection((connection) => {
        connection.query("SELECT * FROM User",
        function(err, rows, fields) {
            if(err){
                console.log(err);
            }else {
                res.send(rows);
            }
        });
        connection.release();
    })
});

app.post('/checkId', (req, res) => {
    const id = req.body.id;
    getConnection((connection) => {
        connection.query("SELECT * from user where userID=?",[id], 
        function(err, rows) {
            if(err){
                console.log(err);
            }else {
                res.send(rows);
            }
        })
    })
})

app.listen(app.get('port'), () => {
    console.log(`Connect at http://localhost:${app.get('port')}`);
})