const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('user home')
})

router.get('/new', (req, res) => {
    res.send('user form')
})

router.post('/', (req, res) => {
    res.send('create user')
})

router.get('/:id', (req, res) => {
    res.send(`user get ${req.params.id}`)
})

module.exports = router;