const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

class Usuario extends Model {}
Usuario.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    rol: DataTypes.STRING
}, { sequelize, modelName: 'Usuario',timestamps:false });



Usuario.sync()

class Producto extends Model {}
Producto.init({
    nombre: DataTypes.STRING,
    cantidad: DataTypes.INTEGER,
}, { sequelize, modelName: 'Producto',timestamps:false });



Producto.sync()

Producto.create({nombre: 'Changua', cantidad: 20})
Producto.create({nombre: 'Popetas', cantidad: 12})
Producto.create({nombre: 'Bonice', cantidad: 10})



module.exports = {
    Usuario: Usuario,
    Producto: Producto
};  