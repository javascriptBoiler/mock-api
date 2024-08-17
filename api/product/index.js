const express = require('express');

const {product: createProduct} = require('../../mock/product/createProduct')
const {product: listProduct} = require('../../mock/product/listProduct')

const router = express.Router();

router.route('/')
  .get((req, res) => {
    res.json(listProduct);
  })
  .post((req, res) => {
    res.json(createProduct);
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