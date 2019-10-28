const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios')
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/get', async (request, response) => {
  var urlRequest = montaUrl(request.query.lang, request.query.page)

  response.header("Access-Control-Allow-Origin", "*");
  response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  await axios.get(urlRequest)
  .then((result) => {
    response.json(montaObj(result.data.items));
  })
  .catch((error) => {
    response.json({"Error!": "Could not find"});
  })
});

function montaUrl(language, page) {
  return 'https://api.github.com/search/repositories?q=language:' + language + '&sort=stars&page=' + page;
}

function montaObj(result) {
  arrayResponse = [];

  result.forEach(repository => {
    arrayResponse.push({
                        "id" : `${repository.id}`,
                        "name" : `${repository.name}`,
                        "url" : `${repository.html_url}`,
                        "avatar" : `${repository.owner.avatar_url}`,
                        "forks" : `${repository.forks}`,
                        "stars" : `${repository.stargazers_count}`,
                        "description" : `${repository.description}`
                      });
  });

  return arrayResponse;
}

app.listen(3001, () => {
  console.log("Server is listening on http://localhost:3001");
});