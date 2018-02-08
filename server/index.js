const express = require('express');

// set up express app
const app = express();

// listen for requests
app.listen(process.env || 4000, function(){
  console.log('Now listen for requests');
});
