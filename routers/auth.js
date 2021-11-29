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
const authMiddleware = require("../auth/middleware");
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
    const token = toJWT({ userId: newUser.id }); //token has the ID encrypted in it. That's why ID is also sent in token.
    //to do: TEST hash, add token.
    res.status(201).json({ token, ...newUser.dataValues, sheets: [] });
  } catch (e) {
    console.log("this is the error: ", e);
    return res.status(400).send({
      message: "Something went wrong, please try again or notify the developer",
    });
  }
});
//LOG IN
// when logging in, decrypt the password bcrypt.comparesync
router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .send({ message: "Please provide both email and password" });
    }

    const user = await User.findOne({ where: { email }, include: Sheet });

    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(400).send({
        message: "User with that email not found or password incorrect",
      });
    }

    delete user.dataValues["password"]; // don't send back the password hash
    const token = toJWT({ userId: user.id });
    return res.status(200).send({ token, ...user.dataValues });
  } catch (error) {
    console.log(error);
    return res.status(400).send({ message: "Something went wrong, sorry" });
  }
});
//me endpoint to get the users email and name just by token, and to check if token is still valid.
router.get("/me", authMiddleware, async (req, res) => {
  //data comes from the middleware.
  // don't send back the password hash
  delete req.user.dataValues["password"];
  const sheets = await Sheet.findAll({ where: { userId: req.user.id } });
  res.status(200).send({ ...req.user.dataValues, sheets: sheets }); //user is declared in middleware
});

//export the router
module.exports = router;
