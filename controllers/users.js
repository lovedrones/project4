const User = require("../models/user");
module.exports = {
  signup
};
async function signup(req, res) {
    console.log(req.body);
  const user = new User(req.body);
  try {
    await user.save();
    res.json(user);
  } catch (err) {
    // Probably a duplicate email
    res.status(400).json(err);
  }
}