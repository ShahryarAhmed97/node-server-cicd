var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello World");
});


app.listen(4000)
    
console.log('server running at port ',4000)
    
