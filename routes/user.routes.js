var express = require('express');
var router = express.Router();

const UserRepository = require('../domain/repository/user.repository')
const UserModel = require("../domain/models/user.models");
const UserController = require("../api/user.controller")

const userRoutes = () => {
        const repository = new UserRepository(UserModel);
        const controller = UserController(repository)

        router.route('/')
                .get(controller.findAll)
                .post(controller.save);

        return router;
}

module.exports = userRoutes;