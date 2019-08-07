const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.get('/',function(req,res){
res.send('<h1>Hello World</h1>')
})
app.post('/',function(req,res){
res.send('Hello World')
    })
app.put('/',function(req,res){
res.send('this is put')
        })
app.delete('/',function(req,res){
res.send('this is delete')
            })
app.listen(3000)