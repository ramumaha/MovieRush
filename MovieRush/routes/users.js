const express=require('express');
const router=express.Router();
const user=require('../models/user');
const passport=require('passport');
const jwt=require('jsonwebtoken');

//register

router.post('/register',(req,res,next)=>{
  let newUser= new user({
      username:req.body.username,
      email:req.body.email,
      password:req.body.password
  });
  user.adduser(newUser,(err,user)=>{
      if(err){
          res.json({success:false,msg:'failed to register user'});
      }else{
          res.json({success:true,msg:'user registered'});
      }

  })
})

//authenticate
router.post('/authenticate',(req,res,next)=>{
    res.send('authenticate');
})


//profile
router.get('/profile',(req,res,next)=>{
    res.send('profile');
})


module.exports=router;