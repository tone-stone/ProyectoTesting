'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Productos extends Model {
   
    static associate({Movimientos}) {
      this.hasMany(Movimientos, {foreignKey:'idProducto',as:'movimientos'});
    }
  }
  Productos.init({
    nombre: DataTypes.STRING,
    codigo: DataTypes.STRING,
    precio: DataTypes.FLOAT,
    control: DataTypes.BOOLEAN,
    activo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Productos',
  });
  return Productos;
};