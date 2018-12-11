import { GET_ARTICLES, ADD_ARTICLE, ARTICLES_LOADING} from '../actions/types'

const initialState = {
  articles : [],
  loading: false 
}

export default function(state = initialState, action) {

  switch(action.type) {

    case GET_ARTICLES:
      return {
        ...state,
        articles: action.payload,
        loading: false
      }

    case ADD_ARTICLE:
      return {
        ...state,
        articles: [action.payload, ...state.articles]
      }

    case ARTICLES_LOADING:
      return {
        ...state,
        loading: true
      }

    default:
      return state
      
  }

}
