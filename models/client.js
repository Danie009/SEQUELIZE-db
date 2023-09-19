'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    static associate(models) {
      Client.hasMany(models.Order, {
        foreignKey: 'ClientId',
        as: 'client', 
      });
    }
    
  }
  Client.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Name cannot be empty.',
        },
        len: {
          args: [1, 80], 
          msg: 'Name must be between 1 and 80 characters long.',
        },
      },
    },
    Email: {
      type: DataTypes.STRING,
      allowNull: false, 
      unique: true,    
    },
    Telephone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: 'Telephone should be unique'
      },
      validate:{
        notNull: {
            args: true,
            msg: 'telephone is required'
        },
      }
    },
  }, {
    sequelize,
    modelName: 'Client',
    tableName: 'clients',
    timestamps: true
  });
  return Client;
};