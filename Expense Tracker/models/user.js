const Sequelize = require('sequelize');
const sequelize = require("../util/database");

const User = sequelize.define('user',{
    id:{
        type : Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    NAME :{
        type: Sequelize.STRING,
        allowNull:false
    },
    EMAIL:{
        type: Sequelize.STRING,
        allowNull:false,
    },
    PHONENUMBER:{
        type: Sequelize.STRING,
        allowNull:false,
    }

})

module.exports=User;