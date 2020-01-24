const express = require('express');
const router = express.Router();

const { create, productById, read, remove, update, list, listRelated, listCategories, listBySearch, photo } = require("../../controllers/product");
const { requireSignin, isAuth, isAdmin } = require("../../controllers/auth");
const { userById } = require("../../controllers/user");

/*---------- Public Routes ----------*/
router.get('/product/:productId', read)

router.post("/product/create/:userId", requireSignin, create );
router.delete('/product/:productId/:userId', requireSignin, remove );
router.put('/product/:productId/:userId', requireSignin, update );
router.get('/products', list);
router.get('/products/related/:productId',listRelated);
router.get('/products/categories', listCategories);
router.post("/products/by/search", listBySearch);
router.get('/product/photo/productId', photo);

router.param('userId', userById);
router.param("productId", productById);

module.exports = router;
