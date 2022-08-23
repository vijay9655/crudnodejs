const express = require('express')
const Users=require('../models/userschema')
const router=express.Router()
var usr
router.get('/',async(req,res)=>{
    try {
         usr=await Users.find()
        res.json(usr)
       
        
    } catch (error) {
        res.send('error',+ error)
    }
})

router.post('/',async(req,res)=>{
    console.log('all users',usr);
    const adduser=new Users({
        name:req.body.name,
        phonenumber:req.body.phonenumber,
       
    })
    const usr1={
        status:true,
        phonenumber:adduser.phonenumber,
        id: adduser.id
    }
    try {
        await adduser.save()
        res.json(usr1)
    } catch (error) {
        res.send(error)
        
    }
})
// console.log('all users',usr);
module.exports=router