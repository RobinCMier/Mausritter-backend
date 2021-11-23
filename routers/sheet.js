// sheet related endpoints: create sheet, edit sheet, show sheet etc
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
