var express = require('express');
var router = express.Router();

// Mongo schema
var item = require('../models/shopingitems')

router.get('/get',(req,res,next)=>{
    item.find(function(err,items){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(items);
        }
    })
    
})

router.post('/create',(req,res,next)=>{
   let newShopingItem = new item({
    itemName:req.body.itemName,
    itemQuantity:req.body.itemQuantity,
    isActive:req.body.isActive
   })
    newShopingItem.save((err,item)=>{
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json("Data has been saved successfully.")
        }
    })
})

module.exports = router;