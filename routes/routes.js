var express = require('express');

const router = express.Router();
var userController = require('../src/user/userController');

router.route('/usuario/getAll').get(userController.getDataControllerFunction);

router.route('/user/create').post(userController.createUserControllerFunction);

router.route('/user/update/:id').patch(userController.updateUserControllerFunction);

router.route('/user/remove/:id').delete(userController.deleteUserControllerFunction);

module.exports = router;