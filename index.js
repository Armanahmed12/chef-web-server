const express = require('express');
const app = express();
const port = 3000;
var cors = require('cors');
const chefsInfo = require('./data/chefs.json');


app.use(cors())

app.get('/', (req, res) => {
 
    res.send("Welcome to chefs' web server");

})

app.get('/chefs', (req, res) => {
 
    res.send(chefsInfo);

})

app.listen(port, () => {
  console.log(`chef app listening on port ${port}`)
})