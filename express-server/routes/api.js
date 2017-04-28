var express = require('express');
var redis = require('redis');

var router = express.Router();
var client = redis.createClient(6379, 'redis_1');


router.get('/', testRacine);
router.get('/test', test);
router.get('/questions', getQuestions);
router.get('/question/:id', getQuestion);
router.post('/question', createQuestion);
router.post('/question/:id/response', createResponse);

module.exports = router;

// =================================================================================================================
// Fonctions associées aux URI
// =================================================================================================================

function testRacine(req, res) {
    res.send("api works");
}

function test (req, res) {
    res.send('Coucou');
}

function getQuestions(req, res) {
    res.send("Coucou tu veux voir mes questions");
}

function getQuestion(req, res) {
    var params = req.params;
    res.send("Coucou tu veux voir ma question n°" + params.id);
}

function createQuestion(req, res) {
    res.send("Coucou, tu crées une question");
}

function createResponse(req, res) {
    var params = req.params;
    res.send("Coucou, tu répond à une question dont l'id est " + params.id);
}
