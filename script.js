const express = require('express');
const routes = require('./routes')
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', routes)

app.set('view engine', 'ejs'); 

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(3000, () => {
  console.log('Сервер запу щенна порту 3000');
});
