const express = require('express')
const app = express()
const bodyparser = require('body-parser')
 
const ObjectId = require('mongodb').ObjectID
 
const MongoClient = require('mongodb').MongoClient
const uri = "mongodb+srv://danilo:caramelo@cluster0.fdeso.mongodb.net/cursoReact?retryWrites=true&w=majority";
 
MongoClient.connect(uri, (err, client) => {
  if (err) return console.log(err)
  db = client.db('cursoReact')
 
  app.listen(3000, () => {
    console.log('Server running on port 3000')
  })
})
 
app.use(bodyparser.urlencoded({ extended: true}))
 
app.set('view engine', 'ejs')
 
app.get('/', function(req, res){
    // var cursor = db.collection('data').find();
    res.render('index.ejs');
});

app.get('/show', (req, res) => {
    db.collection('data').find().toArray((err, results) => {
        if (err) return console.log(err)
        res.render('shows.ejs', { data: results })
    })
})
 
app.post('/show', (req, res)=>{
    db.collection('data').save(req.body, (err, result) => {
        if (err) return console.log(err)
     
        console.log('Salvo no Banco de Dados')
        res.redirect('/show')
      })
});