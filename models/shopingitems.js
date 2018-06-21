const mongo = require('mongoose')

const shopingListItemSchema = mongo.Schema({
itemName:{
    type:String,
    required:true
},
itemQuantity:{
    type:Number,
    required:true
},
isActive:{
    type:Boolean,
    required:true,
}
})

const Item = module.exports = mongo.model('Item',shopingListItemSchema);