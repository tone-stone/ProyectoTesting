'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
   
    static associate({Tiendas, Movimientos}) {
      this.belongsToMany(Tiendas,{foreignKey:'idUsuario',through:'UsuariosTienda', as:'tiendas', onDelete: 'cascade'});
      this.hasMany(Movimientos, {foreignKey:'idUsuario', as:'movimientos'});
    }
  }
  Usuarios.init({
    nombre: DataTypes.STRING,
    acceso: {
      type: DataTypes.STRING,
      unique: true,
    },
    clave: DataTypes.STRING,
    rol: DataTypes.ENUM('admin', 'lider', 'piso'),
    activo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Usuarios',
  });
  return Usuarios;
};