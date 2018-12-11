const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const ArticleSchema = new Schema({
  category: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  source: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  poster: {
    type: String,
    required: true
  },
  vote: {
    type: String,
    required: true
  }
})

module.exports = Article = mongoose.model('article', ArticleSchema)
