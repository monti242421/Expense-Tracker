const express = require("express");
const router = express.Router();
const usercontroller = require('../controller/usercontroller');
const expensecontroller = require('../controller/expenseController');

router.get('/addexpense',expensecontroller.getexpense)

router.post('/addexpense',expensecontroller.addexpense)

router.delete('/addexpense/:expenseId',expensecontroller.deleteexpense);

router.put('/addexpense/:expenseId',expensecontroller.editexpense);

module.exports = router;