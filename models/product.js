"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsToMany(models.Category, {
        through: 'ProductCategory', 
        foreignKey: 'ProductId',
        as: 'categories', 
      });
      this.hasMany(models.Order, {
        foreignKey: 'ProductId',
        as: 'orders', 
      });
    }
  }
  Product.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false, 
        validate: {
          len: {
            args: [3, 30], 
            msg: "Name must be between 3 and 30 characters long.",
          },
        },
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false, 
        unique: false, 
        validate: {
          min: {
            args: [1], 
            msg: "Price must be greater than or equal to 1.",
          },
          max: {
            args: [1000000], 
            msg: "Price must be less than or equal to 1,000,000.",
          },
        },
      },
      make: {
        type: DataTypes.STRING,
        allowNull: true, 
        validate: {
          notEmpty: {
            args: true,
            msg: "Make cannot be empty.",
          },
        },
      },
      color: {
        type: DataTypes.STRING,
        allowNull: true, 
        validate: {
          notEmpty: {
            args: true,
            msg: "Color cannot be empty.",
          },
        },
      },
      Quantity: {
        type: DataTypes.FLOAT,
        allowNull: false, 
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
      modelName: "Product",
      tableName: "products",
      timestamps: true
    }
  );
  return Product;
};
