const mongoose = require('mongoose')

let url = 'mongodb+srv://alvaroagr:slimshadyvox@cluster0-jh3mx.mongodb.net/test?retryWrites=true&w=majority'
// let url = 'mongodb://localhost/icesi'
// let url = 'mongodb://127.0.0.1/icesi'
// let url = 'mongodb+srv://localhost/icesi?retryWrites=true&w=majority'

mongoose.set('useNewUrlParser',true)
mongoose.set('useUnifiedTopology',true)
mongoose.connect(url)
// Assign Promise library.
mongoose.Promise = global.Promise

let db = mongoose.connection

db.on('error', console.error.bind(console, 'Mongo connection error '))

module.exports = db;