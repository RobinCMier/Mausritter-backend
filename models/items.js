"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  items.init(
    {
      itemName: { type: DataTypes.STRING, allowNull: false },
      description: DataTypes.STRING,
      itemHP: { type: DataTypes.INTEGER, defaultValue: 0 },
      itemStr: { type: DataTypes.INTEGER, defaultValue: 0 },
      itemDex: { type: DataTypes.INTEGER, defaultValue: 0 },
      itemWill: { type: DataTypes.INTEGER, defaultValue: 0 },
    },
    {
      sequelize,
      modelName: "items",
    }
  );
  return items;
};
