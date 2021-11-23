//for sign up, log in, token
//imports
const { Router } = require("express");
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 10;
const { toJWT, toData } = require("../auth/JWT");
// import models
const Items = require("../models").items;
const User = require("../models").user;
const Sheet = require("../models").sheet;
const SheetItems = require("../models").sheet_items;
//define router

const router = new Router();

//endpoints
//SIGN UP
router.post("/signup", async (req, res) => {
  console.log(" this is the req. body ", req.body);
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res
      .status(400)
      .send("Please provide a username, email, and password");
  }
  try {
    const newUser = await User.create({
      name,
      email,
      password: bcrypt.hashSync(password, SALT_ROUNDS), // not tested yet.
    });
    console.log("Looking for pw.. ", newUser.dataValues.password);
    delete newUser.dataValues.password;
    const token = toJWT({userId:newUser.id})
    //to do: TEST hash, add token.
    res.status(201).json({token,...newUser.dataValues});
  } catch (e) {
    console.log("this is the error: ", e);
    return res.status(400).send({
      message: "Something went wrong, please try again or notify the developer",
    });
  }
});
//LOG IN
// when logging in, decrypt the password bcrypt.comparesync

//export the router
module.exports = router;
