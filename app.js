var express = require('express');
var path = require('path');
var app = express();
app.use('/cssfiles',express.static(__dirname+'/styles'))
app.use('/imgfiles',express.static(__dirname+'/images'))
app.get('/',function (req,res) {
  res.sendFile('index.html',{root: path.join(__dirname,'/files')});
});

app.listen(1337,function() {
  console.log('Listening on leets port');
});