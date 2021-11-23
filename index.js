//imports
const express = require("express");
const { Router } = express;
const authRouter = require("./routers/auth");
const sheetRouter = require("./routers/sheet");
//import models
const Items = require("./models").items;
const User = require("./models").user;
const Sheet = require("./models").sheet;
const SheetItems = require("./models").sheet_items;
//create server
const app = express();
//MIDDLEWARE
const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);
// ALL ENDPOINTS ARE PROTECTED THUS NEED A JWT MIDDLEWARE
//ROUTING
//testing: get all sheet names of one user

app.get("/", async (req, res) => {
  try {
    console.log("You are requesting all sheets of one user..");
    const allSheets = await User.findByPk(1, {
      include: [{ model: Sheet, attributes: ["charName"] }],
    });
    console.log("res is: ", allSheets);
    return res.status(200).send({ message: "ok", allSheets });
  } catch (e) {
    console.log(e);
  }
});
//listing routers
app.use("/", authRouter);

//port & listen
const port = 4000;
app.listen(port, () => {
  console.log(`Welcome to radio ${port}`);
});
