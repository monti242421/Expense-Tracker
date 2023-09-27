
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const app = express();
const sequelize = require('./models/user');
const sequelizeExpense = require('./models/expense');

app.use(cors());

const userRoute = require('./routes/user');
const expenseRoute = require('./routes/expenseTracker');

app.use(bodyParser.json({extended:false}));


app.use(userRoute);
app.use(expenseRoute);
// app.use((req,res,next)=>{
//     res.status(404).send('<h1>Page Not Found</h1>');
// })

sequelize.sync()
sequelizeExpense.sync();
app.listen(4000);