const express = require('express');
const router = express.Router();

router.get('/todo', function(req, res){
  res.send({type:'GET'});
});

// Add new todo
router.post('/todo', function(req, res){
  console.log(req.body);
  res.send({
    type:'POST',
    todo: req.body.todo
  });
});

// Update todo
router.put('/todo/:id', function(req, res){
  res.send({type:'PUT'});
});

router.delete('/todo/:id', function(req, res){
  res.send({type:'DELETE'});
});

module.exports = router;
