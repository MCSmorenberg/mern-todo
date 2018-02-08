const express = require('express');

// set up express app
const app = express();

app.get('/api', function(req, res){
  console.log('GET request');
  res.send({ name: 'TEST'});
});

// listen for requests
app.listen(process.env.port || 4000, function(){
  console.log('Now listen for requests');
});
