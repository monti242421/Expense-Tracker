const Sequelize = require('sequelize');
const sequelize = require("../util/database");

const Expense = sequelize.define('expense',{
    id:{
        type : Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    CATEGORY :{
        type: Sequelize.STRING,
        allowNull:false
    },
    NEWITEM:{
        type: Sequelize.STRING,
        allowNull:false,
    },
    AMOUNT:{
        type: Sequelize.STRING,
        allowNull:false,
    }

})

module.exports=Expense;