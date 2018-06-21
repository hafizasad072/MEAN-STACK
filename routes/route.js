var express = require('express');
var router = express.Router();

// Mongo schema
var item = require('../models/shopingitems')

// Get All Records
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

// Create item
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

//Update item
router.put('/update/:id',(req,res,next)=>{
    item.findOneAndUpdate({_id: req.params.id},{
$set:{
    itemName:req.body.itemName,
    itemQuantity:req.body.itemQuantity,
    isActive:req.body.isActive
}
    },
    function(err,result)
    {
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(result);
        }
    }
) 
    
 })

 //Delete Item
 router.delete('/delete/:id',(req,res,next)=>{
    item.remove({_id:req.param.id},
    function(err,result)
    {
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(result);
        }
    }
) 
    
 })

 

module.exports = router;