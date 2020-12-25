"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class SBP_User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  SBP_User.init(
    {
      username: DataTypes.STRING,
      password: DataTypes.STRING,
      nickname: DataTypes.STRING,
      email: DataTypes.STRING,
      address: DataTypes.STRING,
      is_admin: DataTypes.BOOLEAN,
      birthday: DataTypes.DATE,
      socialmedia_id: DataTypes.STRING,
      status: DataTypes.TINYINT,
    },
    {
      sequelize,
      modelName: "SBP_User",
    }
  );
  return SBP_User;
};
