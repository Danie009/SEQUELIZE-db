"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Product, {
        foreignKey: 'CategoryId',
        as: 'products', 
      });
    }
    
  }
  Category.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notEmpty: {
            args: true,
            msg: "Name cannot be empty.",
          },
          len: {
            args: [1, 30],
            msg: "Name must be between 1 and 30 characters long.",
          },
        },
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isUrl: {
            args: true,
            msg: "Image must be a valid URL.",
          },
          len: {
            args: [5, 500],
            msg: "Image URL must be between 5 and 500 characters long.",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Category",
      tableName: 'categories',
      timestamps: true
    }
  );
  return Category;
};
