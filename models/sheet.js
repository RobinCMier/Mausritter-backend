"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class sheet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  sheet.init(
    {
      charName: { type: DataTypes.STRING, allowNull: false },
      level: { type: DataTypes.INTEGER, allowNull: false },
      currentHP: DataTypes.INTEGER,
      maxHP: { type: DataTypes.INTEGER, allowNull: false },
      str: { type: DataTypes.INTEGER, allowNull: false },
      dex: { type: DataTypes.INTEGER, allowNull: false },
      will: { type: DataTypes.INTEGER, allowNull: false },
      pips: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "sheet",
    }
  );
  return sheet;
};
