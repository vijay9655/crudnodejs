


const mongoose=require('mongoose')
const userschema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    phonenumber:{
        type:Number,
        require:true
    }

})
module.exports=mongoose.model('Users',userschema)