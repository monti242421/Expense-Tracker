const express = require("express");
const router = express.Router();
const usercontroller = require('../controller/usercontroller');

router.get('/adduser',usercontroller.getUser)

router.post('/adduser',usercontroller.addUserPost)

router.delete('/adduser/:userId',usercontroller.deleteUser);

module.exports = router;