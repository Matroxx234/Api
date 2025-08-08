const express = require('express');
const router = express.Router();
const { getProduits } = require('../controllers/produits.controller');
const { getUserId } = require('../controllers/users.controller');

router.get('/produits/:userId', getProduits);
router.get('/user/:username', getUserId);

module.exports = router;
