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

//endpoints
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
