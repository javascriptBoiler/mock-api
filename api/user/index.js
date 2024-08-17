const express = require('express');

const {user: createUser} = require('../../mock/user/createUser')
const {user: listUser} = require('../../mock/user/listUser')

const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.json(listUser);
  })
  .post((req, res) => {
    res.json(createUser);
  });

router.route('/:id')
  .get((req, res) => {
    res.send(`Get user with ID: ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update user with ID: ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete user with ID: ${req.params.id}`);
  });

module.exports = router;