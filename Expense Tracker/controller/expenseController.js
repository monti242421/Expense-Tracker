const expense = require('../models/expense')

exports.getexpense=(req,res,next)=>{
    expense.findAll().then(expense=>{
        res.send(expense);
    }).catch(err=>{
        console.log(err)
    });
}

exports.addexpense=(req,res,next)=>{
    console.log(req.body)
    // if(!req.body.amount){
    //     throw new Error('Phone number is mandatroy');
    // }
    // if(!req.body.Email){
    //     throw new Error('Email is mandatroy');
    // }
    expense.create({
        CATEGORY:req.body.category,
        NEWITEM:req.body.newItem,
        AMOUNT:req.body.amount
    }).then(result =>{
        console.log(result.dataValues)
        res.status(201).json({newUserDetail: result.dataValues});
    }).catch(err=>{
        console.log(err)
        res.status(500).send(err);
    })


}

exports.deleteexpense=(req,res,next)=>{
    console.log(req.params.expenseId);
    const expenseID = req.params.expenseId;
    expense.findByPk(expenseID)
    .then(expense=>{
        expense.destroy();
        res.send(expense)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).send(err);
    });

}

exports.editexpense=(req,res,next)=>{
    console.log(req.params.expenseId);
    const expenseID = req.params.expenseId;
    expense.findByPk(expenseID)
    .then(expense=>{
        console.log(expense.dataValues);
        console.log(req.body)
        expense.CATEGORY = req.body.category;
        expense.NEWITEM=req.body.newItem;
        expense.AMOUNT=req.body.amount;
        return expense.save()
        
    }).then(result=>{
        res.send(result)
    })
    .catch(err=>{
        console.log(err)
        res.status(500).send(err);
    });

}