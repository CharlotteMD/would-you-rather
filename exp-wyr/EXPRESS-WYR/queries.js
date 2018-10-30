var bluebird = require('bluebird');

var options = {
    // initialise options
    promiseLib: bluebird //overrode default ES6 promises to bluebird
};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://localhost:5432/wouldyou';
var db = pgp(connectionString);

function getAllQuestions(req, res, next) {
    db.any('select * from questions')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL questions'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}

module.exports = {
    getAllQuestions: getAllQuestions
    // getAQuestion: getAQuestion,
    // addAQuestion: addAQuestion,
    // editAQuestion: editAQuestion,
    // deleteAQuestion: deleteAQuestion
};

