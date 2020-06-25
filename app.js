const express = require('express');
const helmet = require('helmet');
const path = require('path');
const app = express();
app.use(helmet());
app.use('/cssfiles',express.static(__dirname+'/styles'))
app.use('/imgfiles',express.static(__dirname+'/images'))
app.use('/svgfiles',express.static(__dirname+'/svg'))
app.get('/',function (req,res) {
  res.sendFile('index.html',{root: path.join(__dirname,'/files')});
});

app.listen(1337,function() {
  console.log('Listening on leets port');
});