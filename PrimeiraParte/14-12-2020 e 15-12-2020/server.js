const express = require('express')
const app = express()
const bodyparser = require('body-parser')
 
const ObjectId = require('mongodb').ObjectID
require('dotenv/config'); 
const MongoClient = require('mongodb').MongoClient
let uri = process.env.DB_URI

 
MongoClient.connect(uri, (err, client) => {
  if (err) return console.log(err)
  db = client.db('cursoReact')
 
  app.listen(3000, () => {
    console.log('Server running on port 3000')
  })
})
 
app.use(bodyparser.urlencoded({ extended: true}))
app.set('view engine', 'ejs')


//ROTAS DOS USUÁRIOS
app.get('/', function(req, res){
    res.render('index.ejs');
});

app.route('/show')
  .get((req, res) => {
    db.collection('users').find().toArray((err, results) => {
        if (err) return console.log(err)
        res.render('shows.ejs', { data: results })
    })
  })
  .post((req, res)=>{
    db.collection('users').save(req.body, (err, result) => {
        if (err) return console.log(err)
     
        console.log('Salvo no Banco de Dados')
        res.redirect('/show')
      })
  })

app.route('/edit/:id')
  .get((req, res) => {
    var id = req.params.id

    db.collection('users').find(ObjectId(id)).toArray((err, result) => {
      if(err) return res.send(err)
      res.render('edit.ejs', {data: result})
    })
  })
  .post((req, res) => {
    var id = req.params.id
    var name = req.body.name
    var surname = req.body.surname

    db.collection('users').updateOne({_id: ObjectId(id)}, {
      $set: {
        name: name, 
        surname: surname
      }
    }, (err, result) => {
      if (err) return res.send(err)
      res.redirect('/show')
      console.log('Atualizado no Banco de Dados')
    })
  })

app.route('/delete/:id')
  .get((req, res) => {
    var id = req.params.id

    db.collection('users').deleteOne({_id: ObjectId(id)}, (err, result) => {
      if (err) return res.send(500, err)
      console.log('Deletado do Banco de Dados')
      res.redirect('/show')
    })
  })


// ROTAS DOS PRODUTOS
app.route('/product')
  .get((req, res) => {
    res.render('product/product.ejs');
  })
  .post((req, res) => {
    db.collection('products').save(req.body, (err, result) => {
      if(err) return console.log(err)

      console.log('Salvo no banco de dados')
      res.redirect('/showProduct')
    })
  })

app.route('/showproduct')
  .get((req, res) => {
    db.collection('products').find().toArray((err, results) => {
      if (err) return console.log(err)
      res.render('product/showProduct.ejs', { data: results })
    })
  })

app.route('/deleteproduct/:id')
  .get((req, res) => {
    var id = req.params.id

    db.collection('products').deleteOne({_id: ObjectId(id)}, (err, result) => {
      if (err) return res.send(500, err)
      console.log('Deletado do Banco de Dados')
      res.redirect('/showproduct')
    })
  })

app.route('/editproduct/:id')
  .get((req, res) => {
    var id = req.params.id

    db.collection('products').find(ObjectId(id)).toArray((err, result) => {
      if(err) return res.send(err)
      res.render('product/editProduct.ejs', {data: result})
    })
  })
  .post((req, res) => {
    var id = req.params.id
    var productName = req.body.productName
    var price = req.body.price
    var date = req.body.date

    db.collection('products').updateOne({_id: ObjectId(id)}, {
      $set: {
        productName: productName, 
        price: price,
        date: date
      }
    }, (err, result) => {
      if (err) return res.send(err)
      res.redirect('/showproduct')
      console.log('Atualizado no Banco de Dados')
    })
  })
