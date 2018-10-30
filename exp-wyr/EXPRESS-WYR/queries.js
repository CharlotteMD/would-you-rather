var bluebird = require('bluebird');

var options = {
    // initialise options
    promiseLib: bluebird //overrode default ES6 promises to bluebird
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/wouldyou';
var db = pgp(connectionString);

// query functions

module.exports = {
    getAllQuestions: getAllQuestions,
    getAQuestion: getAQuestion,
    addAQuestion: addAQuestion,
    editAQuestion: editAQuestion,
    deleteAQuestion: deleteAQuestion
};