const express = require('express');
const app = express();
const port = 3000;
var cors = require('cors');
const chefsInfo = require('./data/chefs.json');
const chefsRecipesData = require('./data/chefsRecipes.json');


app.use(cors())

app.get('/', (req, res) => {
 
    res.send("Welcome to chefs' web server");

})



app.get('/chefs', (req, res) => {
 
    res.send(chefsInfo);

})

app.get('/chef/:id', (req, res) =>{

       const id = req.params.id;
       const chefDetailsInfo =  chefsRecipesData.find(eachChefInfo => eachChefInfo.id == id);
       res.send(chefDetailsInfo);
})

app.listen(port, () => {
  console.log(`chef app listening on port ${port}`)
})