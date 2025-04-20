const mongoose=require("mongoose")
const mcqModel=new mongoose.Schema({
    question:{type:String},
    optionA:{type:String},
    optionB:{type:String},
    optionC:{type:String},
    optionD:{type:String},
    answer:{type:String},
    explain:{type:String}

})

const mcq=mongoose.model("mcq",mcqModel)
module.exports=mcq