"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Model extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Model.belongsTo(models.Product);
    }
  }
  Model.init(
    {
      ProductId: DataTypes.INTEGER,
      name: DataTypes.STRING,
      stock: DataTypes.INTEGER,
      is_deleted: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Model",
    }
  );
  return Model;
};
