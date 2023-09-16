const {config} = require('dotenv')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient

config()

    const DB_PORT = parseInt(process.env.DB_PORT)
    const connectionString = process.env.DB_URL
    
    app.listen(DB_PORT, function() {
        // console.log('May Node be with you')
        console.log('listening on port: ' + DB_PORT)
        
    })
    
    MongoClient.connect(`${connectionString}`)
    .then(client => {
        const db = client.db('star-wars-quotes')
        const quotesCollection = db.collection('quotes')
        console.log('Connected to Database')
        
        // middlewares
        app.set('view engine', 'ejs')
        app.get('/',  (req, res) => {
            db.collection('quotes')
                .find()
                .toArray()
                .then(quotes => {
                res.render('index.ejs', { quotes: quotes})
            })
            .catch(err => 
                console.error(err))
        })
        app.post('/quotes', (req, res) => {
            quotesCollection
                .insertOne(req.body)
                .then(result => {
                    res.redirect('/')
                    console.log(result)
                    console.log(req.body)
                })
                .catch(err => 
                console.error(err))
        })
        
 })
    // .catch(console.error)

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/',  (req, res) => {
    // res.send('Hello World')
    res.sendFile(__dirname + '/index.html')
})

