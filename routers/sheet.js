// sheet related endpoints: create sheet, edit sheet, show sheet etc
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

//ENDPOINTS
//GET request to get all sheets of one user
router.get("/:id", async (req, res) => {
  try {
    const userId = parseInt(req.params.id);
    // console.log("You are requesting all sheets of user id: ", userId);
    const userFull = await User.findByPk(userId, {
      //URL FOR NOW CHANGE TO JWT LATER
      include: [{ model: Sheet }],
    });
    // console.log("res is: ", allSheets);
    return res.status(200).send({ message: "ok", userFull });
  } catch (e) {
    console.log(e);
    return res.status(400).send({ message: "Something went wrong, soz" });
  }
});

module.exports = router;

// PATCH request to edit the sheet

// POST request to create a new sheet
router.post("/postsheet", async (req, res) => {
  console.log(" this is the req. body ", req.body);
  const {
    charName,
    charColor,
    level,
    background,
    pips,
    currentHP,
    maxHP,
    str,
    dex,
    will,
    userId,
  } = req.body;
  if (!charName) {
    return res
      .status(400)
      .send(
        "You can edit everything later, but please provide at least a name!"
      );
  }
  const user = await User.findByPk(req.body.userId);
  console.log("user is: ", user);
  try {
    const newUser = await Sheet.create({
      charName,
      charColor,
      level,
      background,
      pips,
      currentHP,
      maxHP,
      str,
      dex,
      will,
      userId,
    });
    res.status(201).json({ ...newUser.dataValues });
  } catch (e) {
    console.log("this is the error: ", e);
    return res.status(400).send({
      message: "Something went wrong, please try again or notify the developer",
    });
  }
});
