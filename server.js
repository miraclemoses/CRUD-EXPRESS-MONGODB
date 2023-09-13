const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient

app.listen(3000, function() {
    // console.log('May Node be with you')
    console.log('listening on port: 3000')
    
})
MongoClient.connect('mongodb+srv://yoda:HieJfP4zFiyuqiP4@c2.uoosn8t.mongodb.net/?retryWrites=true&w=majority',
    (err) => {
    if (err) return
    console.error(err)
    console.log('connected to dn')
})  
    // .then(client => {
    //     const db = client.db('star-wars-quotes')
    //     const quotesCollection = db.collection('quotes')
        
        // console.log('Connected to Database')
        // app.use()
        // app.get()
        // app.post('/quotes', (req, res) => {
        //     quotesCollection
        //         .insertOne(req.body)
        //         .then(result => {
        //             console.log(result)
        //         })
        //         .catch(err => 
        //         console.error(err))
        // })
        // app.listen()
        
    // })
    // .catch(console.error)


app.use(bodyParser.urlencoded({ extended: true }))

app.get('/',  (req, res) => {
    // res.send('Hello World')
    res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req, res) => {
    // console.log('Helloooooooooooooooo!')
    console.log(req.body)
})