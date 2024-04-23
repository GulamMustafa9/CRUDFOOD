const mongoose=require('mongoose')
const bdSchema=mongoose.Schema({
    foodName:{type:String},
    foodCode:{type:String},
    foodImage:{type:String},
    foodCategory:{type:String},
    qty:{type:Number},
    price:{type:Number},
    }, {timestamps:true, versionKey:false})

const ProductModel=mongoose.model('item',bdSchema)
module.exports=ProductModel;