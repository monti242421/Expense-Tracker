const user = require('../models/user')

exports.getUser=(req,res,next)=>{
    user.findAll().then(users=>{
        res.send(users);
    }).catch(err=>{
        console.log(err)
    });
}

exports.addUserPost=(req,res,next)=>{
    console.log(req.body)
    if(!req.body.PhoneNumber){
        throw new Error('Phone number is mandatroy');
    }
    if(!req.body.Email){
        throw new Error('Email is mandatroy');
    }
    user.create({
        NAME:req.body.Name,
        EMAIL:req.body.Email,
        PHONENUMBER:req.body.PhoneNumber
    }).then(result =>{
        console.log(result.dataValues)
        res.status(201).json({newUserDetail: result.dataValues});
    }).catch(err=>{
        console.log(err)
        res.status(500).send(err);
    })


}

exports.deleteUser=(req,res,next)=>{
    console.log(req.params.userId);
    const userID = req.params.userId;
    user.findByPk(userID)
    .then(user=>{
        user.destroy();
        res.send(user)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).send(err);
    });

}