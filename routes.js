const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {

    const idUser = req.params.id; 
  
    res.render('userdata', {
      idUser: idUser
    }); 
    
});


router.post('/submit', (req, res) => {
  const username = req.body.username;

  res.render('username', {
    username: username
  })
})

module.exports = router;