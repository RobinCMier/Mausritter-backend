//imports
const express = require("express");
const { Router } = express;
const corsMiddleWare = require("cors");
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
app.use(corsMiddleWare());
const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);
// ALL ENDPOINTS ARE PROTECTED THUS NEED A JWT MIDDLEWARE
//ROUTING
/* 

POST "/auth/login" => login page
POST "/auth/signup" => sign up page
GET "/sheet/:id"=> user homepage

*/
//listing routers
app.use("/auth", authRouter);
app.use("/sheet", sheetRouter);

//port & listen
const port = 4000;
app.listen(port, () => {
  console.log(`Welcome to radio ${port}`);
});
