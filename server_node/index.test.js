const test = require('tape')
const index = require('./index')

test('Testing: Generate URL', (t) => {
    t.assert(index.generateUrl('Go', '1') === 'https://api.github.com/search/repositories?q=language:Go&sort=stars&page=1', "Test for URL is OK!")
    t.end();
})

test('Testing: Generate Object', (t) => {
    objTest = [{
        "id" : "1",
        "name" : "Pedro",
        "html_url" : "github.com/bwpedro",
        "owner" : {
            "avatar_url" : "teste",
        },
        "forks" : "500",
        "stargazers_count" : "400",
        "description" : "This is a test"
    }];
    objCompare = [{
        "id" : "1",
        "name" : "Pedro",
        "url" : "github.com/bwpedro",
        "avatar" : "teste",
        "forks" : "500",
        "stars" : "400",
        "description" : "This is a test"
    }]
    ObjTest = index.generateObj(objTest);

    t.assert(ObjTest.id === objCompare.id &&
             ObjTest.name === objCompare.name &&
             ObjTest.url === objCompare.url &&
             ObjTest.avatar === objCompare.avatar &&
             ObjTest.forks === objCompare.forks &&
             ObjTest.stars === objCompare.stars &&
             ObjTest.description === objCompare.description
            , "Test for Object is OK!")
    t.end();
})