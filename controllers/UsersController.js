/* eslint-disable no-console */
const { UserService } = require('../services');

module.exports = {
  create: (req, res) => {
    /*      const userExists = UserService.findUserByEmail(req.body.email);
            if (userExists) res.status(400).json({message: 'User already exist'}) */
    UserService.create(req.body)
      .then((user) => res.status(201).json(user))
      .catch((err) => res.status(400).json(err));
  },
  findAll: (req, res) => {
    // console.log('◄◄', req.decoded.email);
    UserService.findAll()
      .then((users) => res.status(200).json(users))
      .catch((err) => res.status(400).json(err));
  },
};
