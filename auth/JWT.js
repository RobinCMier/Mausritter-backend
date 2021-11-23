const jwt = require("jsonwebtoken");

const secret = process.env.JWT_SECRET || "e9rp^&^*&@9sejg)DSUAsldgyfleuyf";

function toJWT(data) {
  return jwt.sign(data, secret, { expiresIn: "2h" });
}

function todata(token) {
  return jwt.verify(token, secret);
}

module.exports = { toJWT, todata };
