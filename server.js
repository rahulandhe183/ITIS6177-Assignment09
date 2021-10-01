const express = require('express');
const app = express();
const axios = require('axios');
const port = 3000;

app.get('/', function(req,res){
    res.send("Go to http://143.198.125.67:3000/say?keyword=Hello for AWS function response");
});


app.get('/say', function(req,res) {
        resp = "Hello World" + req.query.keyword ;
        axios.get('https://rb75mu1n56.execute-api.us-east-1.amazonaws.com/default/myFunction?keyword='+req.query.keyword)
        .then(response =>{
                res.statusCode = response.data.statusCode;
                res.send(response.data.body);
        })
        .catch(err=>{
                res.statusCode = 400;
                res.send(err);
        });
});

app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`);
});