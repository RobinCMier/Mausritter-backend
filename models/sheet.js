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
      sheet.belongsTo(models.user);
      sheet.belongsToMany(models.items, {
        through: "sheet_items",
        foreignKey: "sheetId",
      });
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
      charColor: { type: DataTypes.STRING, defaultValue: "#b1f59d" },
      userId: { type: DataTypes.INTEGER, allowNull: false },
    },
    {
      sequelize,
      modelName: "sheet",
    }
  );
  return sheet;
};
