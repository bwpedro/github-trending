const initState = {};

const repositoryReducer = (state = initState, action) => {
  switch (action.type) {
    case 'GET_REPOSITORIES':
      return action;
    case 'GET_REPOSITORIES_ERROR':
      alert("Could not find language");
      return state;
    case 'PAGE_UNDEFINED':
        alert("Could not find page");
        return state;
    default:
      return state;
  }
}

export default repositoryReducer;