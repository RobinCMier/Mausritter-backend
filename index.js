//imports
const express = require("express");
const { Router } = express;
const corsMiddleWare = require("cors");

//import routers
const authRouter = require("./routers/auth");
const sheetRouter = require("./routers/sheet");
//create server
const app = express();
//MIDDLEWARE
app.use(corsMiddleWare());
const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);
// ALL ENDPOINTS ARE PROTECTED THUS NEED A JWT MIDDLEWARE
//ROUTING

//listing routers
app.use("/auth", authRouter);
app.use("/sheet", sheetRouter);

//port & listen
const port = process.env.port || 4000;
app.listen(port, () => {
  console.log(`Welcome to radio ${port}`);
});
