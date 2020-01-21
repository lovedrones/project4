const express = require('express');
const router = express.Router();

const { create } = require("../../controllers/product");
const { requireSignin, isAuth, isAdmin } = require("../../controllers/auth");
const { userById } = require("../../controllers/user");

/*---------- Public Routes ----------*/

router.post(
    "/product/create/:userId",
    requireSignin, 
    isAuth, 
    isAdmin, 
    create
    );


router.param('userId', userById);


module.exports = router;
