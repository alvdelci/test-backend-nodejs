const express = require('express');

const router = express.Router();
const controller= require('./controllers/controller');

router.post('/create', controller.create);
router.post('/remove', controller.remove);
router.post('/update', controller.update);
router.post('/update/product/category', controller.updateProductCategory);
router.post('/update/category', controller.updateCategory);
router.get('/read', controller.readAll);
router.post('/read/tittle', controller.tittleResearch);
router.post('/read/category', controller.categoryResearch);

module.exports = router;