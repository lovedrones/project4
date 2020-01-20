const express = require('express');
const router = express.Router();

const { 
     signup, 
     signin,
     signout, 
     requireSignin 
    } = require('../../controllers/users');

const { userSignupValidator } = require("../../validator");

/*---------- Public Routes ----------*/

router.post("/signup", userSignupValidator, signup);
router.post("/signin", signin);
router.get("/signout", signout);

router.get('/hello', requireSignin, (req, res) => {
    res.send("hello there");
});

module.exports = router;
