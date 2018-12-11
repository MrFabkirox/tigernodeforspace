const express = require('express')
const router = express.Router()

// Article Model
const Article = require('../../models/Article')

router.get('/', (req, res) => {
  Article.find()
    .sort({ date: -1 })
    .then(articles => res.json(articles))
})

router.post('/', (req, res) => {
  const newArticle = new Article({
    category: req.body.category,
    subject: req.body.subject,
    body: req.body.body,
    source: req.body.source,
    date: req.body.date,
    poster: req.body.poster,
    vote: req.body.vote
  })
  newArticle.save().then(article => res.json(article))
})

module.exports = router
