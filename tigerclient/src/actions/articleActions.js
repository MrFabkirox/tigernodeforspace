import axios from 'axios'
import { GET_ARTICLES, ADD_ARTICLE, ARTICLES_LOADING } from './types'

export const getArticles = () => dispatch => {
  dispatch(setArticlesLoading())
  axios
    .get('/api/articles')
    .then(res =>
        dispatch({
          type:  GET_ARTICLES,
          payload: res.data
        }))
}

export const addArticle = article => dispatch => {
  axios
    .post('/api/articles', article)
      .then(res =>
        dispatch({
          type: ADD_ARTICLE,
          payload: res.data
        })
      )
}

export const setArticlesLoading = article => {
  return {
    type: ARTICLES_LOADING,
  }
}
