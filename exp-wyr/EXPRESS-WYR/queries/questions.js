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

function getAQuestion(req, res, next) {
    var questionID = parseInt(req.params.id);
    db.one('select * from questions where id = $1', questionID)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ONE question'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}

function addAQuestion(req, res, next) {
    db.none('insert into questions(ratherA, ratherB)' +
        'values(${ratherA}, ${ratherB})',
        req.body)
        .then(function () {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one question'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}

function editAQuestion(req, res, next) {
    db.none('update questions set ratherA=$1, ratherB=$2 where id=$3',
        [req.body.ratherA, req.body.ratherB, parseInt(req.params.id)])
        .then(function () {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Updated question'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}

function deleteAQuestion(req, res, next) {
    var questionID = parseInt(req.params.id);
    db.result('delete from questions where id = $1', questionID)
        .then(function (result) {
            /* jshint ignore:start */
            res.status(200)
                .json({
                    status: 'success',
                    message: `Removed ${result.rowCount} questions`
                });
            /* jshint ignore:end */
        })
        .catch(function (err) {
            return next(err);
        });
}

function getAllUsers(req, res, next) {
    db.any('select * from users')
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ALL users'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}

function getAUser(req, res, next) {
    var userID = parseInt(req.params.id);
    db.one('select * from Users where id = $1', userID)
        .then(function (data) {
            res.status(200)
                .json({
                    status: 'success',
                    data: data,
                    message: 'Retrieved ONE user'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}

function addAUser(req, res, next) {
    db.none('insert into users(name, email, password)' +
        'values(${name}, ${email}, ${password})',
        req.body)
        .then(function () {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Inserted one user'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}

function editAUser(req, res, next) {
    db.none('update Users set name=$1, email=$2, password=$3 where id=$4',
        [req.body.name, req.body.email, req.body.password, parseInt(req.params.id)])
        .then(function () {
            res.status(200)
                .json({
                    status: 'success',
                    message: 'Updated user'
                });
        })
        .catch(function (err) {
            return next(err);
        });
}

function deleteAUser(req, res, next) {
    var userID = parseInt(req.params.id);
    db.result('delete from users where id = $1', userID)
        .then(function (result) {
            /* jshint ignore:start */
            res.status(200)
                .json({
                    status: 'success',
                    message: `Removed ${result.rowCount} users`
                });
            /* jshint ignore:end */
        })
        .catch(function (err) {
            return next(err);
        });
}

module.exports = {
    getAllQuestions: getAllQuestions,
    getAQuestion: getAQuestion,
    addAQuestion: addAQuestion,
    editAQuestion: editAQuestion,
    deleteAQuestion: deleteAQuestion,
    getAllUsers: getAllUsers,
    getAUser: getAUser,
    addAUser: addAUser,
    editAUser: editAUser,
    deleteAUser: deleteAUser
};

