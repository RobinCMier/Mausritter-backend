//imports
const Users = require("./models").user;
const Sheets = require("./models").sheet;
const Items = require("./models").items;
const SheetItems = require("./models").sheet_items;
//get all users with their sheets
async function getAllUsers() {
  try {
    const allUsers = await Users.findAll({
      include: [{ model: Sheets, attributes: ["charName"] }],
    });
    return allUsers;
  } catch (e) {
    console.log(e);
  }
}
// getAllUsers().then((users) => console.log(users));

//get one sheet by id and its user
async function getOneSheet() {
  try {
    const oneSheet = await Sheets.findByPk(3, {
      include: [{ model: Users, attributes: ["name"] }],
    });
    console.log(oneSheet.charName);
    console.log(oneSheet.user.name);
    return oneSheet;
  } catch (e) {
    console.log(e);
  }
}
// getOneSheet();
// get all sheets and their item names
async function getSheetItems() {
  try {
    const sheetItem = await Sheets.findByPk(1, { include: [Items] });
    console.log(sheetItem.charName);
    console.log(sheetItem.items.map((item) => item.itemName));
    return sheetItem;
  } catch (e) {
    console.log(e);
  }
}
getSheetItems();
