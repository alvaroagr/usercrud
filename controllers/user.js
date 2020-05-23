const User = require('../models/user')

exports.create = function (req, res, next) {
    let user = new User({
        name: {
            firstName: req.body.name.firstName,
            lastName: req.body.name.lastName
        },
        username: req.body.username,
        identification: req.body.identification,
        password: req.body.password,
        photo: req.body.photo,
        description: req.body.description,
        active: true
    })

    user.save(err => {
        if (err)
            return next(err)
        res.send('User Successfully Created')
    })
}

exports.index = function (req,res, next) {
    User.find({}, function (err, users) {
        if (err)
            return next(err)
        res.send(users)
    })
}

exports.show = function (req, res, next) {
    // User.findOne({ identification: req.params.id }, function (err, user) {
    User.findById(req.params.id, function (err, user) {
        if (err)
            return next(err)
        res.send(user)
    })
}

exports.update = function (req, res, next) {
    // User.findOneAndUpdate({ identification: req.params.id }, {$set: req.body}, function (err, user) {
    User.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, user) {
        if (err)
            return next(err)
        res.send("User Successfully Updated")
    })
}

exports.delete = function (req, res, next){
    User.findByIdAndRemove(req.params.id, err => {
        if(err)
            return next(err)
        res.send("User Successfully Deleted")
    })
}