import axios from 'axios'

export const getRepository = (language) => {
  if(language.page <= 0) return (dispatch) => {dispatch({type: 'PAGE_UNDEFINED'})};

  var urlRequest = 'http://localhost:3001/get?';
  urlRequest += 'lang=' + language.language + '&page=' + language.page;

  return (dispatch, getState) => {
    axios.get(urlRequest)
    .then((result) => {
      dispatch({type: 'GET_REPOSITORIES', repositories: result.data});
    })
    .catch((error) => {
      dispatch({type: 'GET_REPOSITORIES_ERROR', error});
    })
  }
}