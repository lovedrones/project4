const express = require('express');
const router = express.Router();

const { signup} = require('../../controllers/users');
const { userSignupValidator } = require("../../validator");

/*---------- Public Routes ----------*/

router.post("/signup", userSignupValidator, signup);
// router.post("/signin", signin);

module.exports = router;
