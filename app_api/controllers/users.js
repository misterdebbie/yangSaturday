/**
 * Created by debrachong on 12/2/16.
 */
var mongoose = require('mongoose');
var User = mongoose.model('User');

var sendJSONresponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

/* GET list of users */
module.exports.displayUsers = function(req, res) {
     User
        .find()
        .exec(
            function(err, results) {
                if (err) {
                    console.log('results error:', err);
                    sendJSONresponse(res, 404, err);
                } else {
                    sendJSONresponse(res, 200, results);
                }
            });
};

/* GET a user by the id */
module.exports.userReadOne = function(req, res) {
    console.log('Finding user details', req.params);
    if (req.params && req.params.userId) {
        User
            .findById(req.params.userId)
            .exec(function(err, user) {
                if (!user) {
                    sendJSONresponse(res, 404, {
                        "message": "userId not found"
                    });
                    return;
                } else if (err) {
                    console.log(err);
                    sendJSONresponse(res, 404, err);
                    return;
                }
                console.log(user);
                sendJSONresponse(res, 200, user);
            });
    } else {
        console.log('No userId specified');
        sendJSONresponse(res, 404, {
            "message": "No userId in request"
        });
    }
};

/* POST a new user */
/* /api/users */
module.exports.userCreate = function(req, res) {
    console.log(req.body);
    User.create({
        name: req.body.name,
        password: req.body.password,
        comments: req.body.comments
    }, function(err, item) {
        if (err) {
            console.log(err);
            sendJSONresponse(res, 400, err);
        } else {
            console.log(item);
            sendJSONresponse(res, 201, item);
        }
    });
};


/* PUT /api/users/:userId */
module.exports.userUpdateOne = function(req, res) {
    if (!req.params.userId) {
        sendJSONresponse(res, 404, {
            "message": "Not found, userId is required"
        });
        return;
    }
    User
        .findById(req.params.userId)
        .select('-reviews -rating')
        .exec(
            function(err, user) {
                if (!user) {
                    sendJSONresponse(res, 404, {
                        "message": "userId not found"
                    });
                    return;
                } else if (err) {
                    sendJSONresponse(res, 400, err);
                    return;
                }
                user.name = req.body.name;
                user.password = req.body.password;
                user.comments = req.body.comments;
                user.save(function(err, user) {
                    if (err) {
                        sendJSONresponse(res, 404, err);
                    } else {
                        sendJSONresponse(res, 200, user);
                    }
                });
            }
        );
};

/* DELETE /api/users/:userId */
module.exports.userDeleteOne = function(req, res) {
    var userId = req.params.userId;
    if (userId) {
        User
            .findByIdAndRemove(userId)
            .exec(
                function(err, user) {
                    if (err) {
                        console.log(err);
                        sendJSONresponse(res, 404, err);
                        return;
                    }
                    console.log("User id " + userId + " deleted");
                    sendJSONresponse(res, 204, null);
                }
            );
    } else {
        sendJSONresponse(res, 404, {
            "message": "No userId"
        });
    }
};