//imports
const express = require("express");

//create server
const app = express();

//routing

//port & listen
const port = 4000;
app.listen(port, () => {
  console.log(`Welcome to radio ${port}`);
});
