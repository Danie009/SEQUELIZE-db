"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Product, {
        foreignKey: "ProductId",
        as: "product",
      });
    }
  }
  Order.init(
    {
      dateOfOrder: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      Quantity: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          min: {
            args: [1],
            msg: "Quantity must be greater than or equal to 1.",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Order",
      tableName: "orders",
      timestamps: true,
    }
  );
  return Order;
};
