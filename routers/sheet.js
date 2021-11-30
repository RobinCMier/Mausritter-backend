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
const authMiddleware = require("../auth/middleware");
//define router
const router = new Router();

//ENDPOINTS
//GET request to get all sheets of one user
router.get("/:id", authMiddleware, async (req, res) => {
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
router.patch("/editsheet/:id", async (req, res) => {
  try {
    const sheetId = parseInt(req.params.id);
    console.log("id is: ", sheetId);
    const sheetToUpdate = await Sheet.findByPk(sheetId);
    const {
      charName,
      charColor,
      level,
      charBackground,
      pips,
      currentHP,
      maxHP,
      str,
      dex,
      will,
      userId,
    } = req.body.sheet; //new value
    console.log("new values ", req.body);
    await sheetToUpdate.update({
      charName,
      charColor,
      level: parseInt(level),
      charBackground,
      pips: parseInt(pips),
      currentHP: parseInt(currentHP),
      maxHP: parseInt(maxHP),
      str: parseInt(str),
      dex: parseInt(dex),
      will: parseInt(will),
      userId,
    });
    console.log("this is the updated sheet: ", sheetToUpdate.dataValues);
    res.status(200).send(sheetToUpdate.dataValues);
  } catch (e) {
    console.log(`Patch endpoint failed. Message: ${e}`);
  }
});
// POST request to create a new sheet
router.post("/postsheet", async (req, res) => {
  console.log(" this is the req. body ", req.body);
  const {
    charName,
    charColor,
    level,
    charBackground,
    pips,
    currentHP,
    maxHP,
    str,
    dex,
    will,
  } = req.body.fullSheet; //all ints are strings tho

  if (
    !charName ||
    !level ||
    !charBackground ||
    !pips ||
    !maxHP ||
    !str ||
    !dex ||
    !will
  ) {
    return res
      .status(400)
      .send("You can edit everything later, but please fill it in completely!");
  }
  const userId = req.body.userId;
  console.log("CharName and level: ", charName, level);
  const user = await User.findByPk(req.body.userId);
  console.log("user is: ", user);
  try {
    const newSheet = await Sheet.create({
      charName,
      charColor,
      level: parseInt(level),
      charBackground,
      pips: parseInt(pips),
      currentHP: parseInt(currentHP),
      maxHP: parseInt(maxHP),
      str: parseInt(str),
      dex: parseInt(dex),
      will: parseInt(will),
      userId,
    });
    res.status(201).json({ ...newSheet.dataValues });
  } catch (e) {
    console.log("this is the error: ", e);
    return res.status(400).send({
      message: "Something went wrong, please try again or notify the developer",
    });
  }
});

//DELETE request to delete a sheet

router.delete("/:userId/delete/:sheetId", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.userId);
    const sheetId = parseInt(req.params.sheetId);
    console.log("what is userId ", userId);
    const sheet = await Sheet.findByPk(sheetId);
    // console.log(
    //   " these are the sheet and the attached user: ",
    //   sheet.dataValues,
    //   sheet.dataValues.user.dataValues.id
    // );
    console.log("this is sheet: ", sheet);
    if (!sheet) {
      return res.status(404).send("Story not found");
    }
    if (sheet.userId !== userId) {
      return res.status(401).send("You're not authorized to delete this sheet");
    }
    await sheet.destroy();

    res.send({ message: "ok", sheetId });
  } catch (e) {
    next(e);
  }
});
// router.delete("/delete", async (req, res, next) => {
//   try {
//     const userId = 2;
//     const sheetId = 2;
//     const sheet = await Sheet.findByPk(sheetId);
//     console.log("this is sheet: ", sheet);
//     if (!sheet) {
//       return res.status(404).send("Story not found");
//     }
//     // if (sheet.userId !== userId) {
//     //   return res.status(401).send("You're not authorized to delete this sheet");
//     // }
//     await sheet.destroy();

//     res.send({ message: "ok", sheetId });
//   } catch (e) {
//     next(e);
//   }
// });
