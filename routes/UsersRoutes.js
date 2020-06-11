const express = require('express');

const router = express.Router();

const { UsersController } = require('../controllers');
const { UserValidator } = require('../validators');
const { verifyToken } = require('../middleware');

router.post('/users',
  UserValidator.create,
  UsersController.create);

router.get('/users',
  verifyToken,
  UsersController.findAll);

module.exports = router;
