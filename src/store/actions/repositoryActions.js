import axios from 'axios'

var urlRequest = 'https://api.github.com/search/repositories?q=language:';

export const getRepository = (language) => {

  if(language.page <= 0) return (dispatch) => {dispatch({type: 'PAGE_UNDEFINED'})};

  urlRequest += language.language + '&sort=stars&page=' + language.page;

  return (dispatch, getState) => {
    axios.get(urlRequest)
    .then((result) => {
      dispatch({type: 'GET_REPOSITORIES', repositories: result.data.items});
    })
    .catch((error) => {
      dispatch({type: 'GET_REPOSITORIES_ERROR', error});
    })
  }
}