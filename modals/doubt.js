const mongoose=require("mongoose")
const doubtModel=new mongoose.Schema({
    qustionId:{type:String},
    Date:{type:String},
    flag:{type:String}
})

const doubt=mongoose.model("doubt",doubtModel)
module.exports=doubt