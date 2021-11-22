"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class sheet_items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  sheet_items.init(
    {
      sheetId: DataTypes.INTEGER,
      itemId: DataTypes.INTEGER,
      isworn: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
    },
    {
      sequelize,
      modelName: "sheet_items",
    }
  );
  return sheet_items;
};
