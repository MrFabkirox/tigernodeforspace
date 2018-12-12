const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')

const articles = require('./routes/api/articles')

const app = express()

// bodyparser middleware
app.use(bodyParser.json())

// handling cors error
app.use((req, res, next) => {
  res.header('Access-Controller-Allow-Origin', '*');
  res.header('Access-Controller-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if(req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
    return res.status(200).json({
      // header: res.header // to try later
    });
  }
  next();
});

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

// // mongodb for docker
// mongoose.connect(
//   'mongodb://mongo:27017/tigernodeforspace',
//   { useNewUrlParser: true }
// )
// .then(() => console.log('Mongodb connected'))
// .catch(err => console.log(err))

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
