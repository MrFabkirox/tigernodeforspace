const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')

const articles = require('./routes/api/articles')

const app = express()

// bodyparser middleware
app.use(bodyParser.json())

// // local db config
// const db = require('./config/keys').mongoURI
// 
// // connect to local mongo
// mongoose.connect(db)
//   .then(() => console.log('mongodb connected'))
//   .catch(err => console.log(err))
  
// atlas db
mongoose.connect(
  'mongodb+srv://tigeradmin:'
      + process.env.MONGO_ATLAS_PW
      + '@tigernodesandreact-4kfsd.mongodb.net/', {
    dbName: 'tigernodesandreact',
    useNewUrlParser: true
  }
)
.then(() => console.log('mongodb connected'))
.catch(err => console.log(err))

mongoose.Promise = global.Promise;

// Use Routes
app.use('/api/articles', articles)

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('tigerclient/build'))

  app.get('*', (req, res) => {

    res.sendFile(path.resolve(__dirname, 'tigerclient', 'build', 'index.html'))
  })
}
const port = process.env.PORT || 5000

app.listen(port, () => console.log(`Server on ${port}`))
