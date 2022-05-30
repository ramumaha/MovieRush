const express=require('express');
const router=express.Router();
const User=require('../models/user');
const passport=require('passport');
const jwt=require('jsonwebtoken');
const config=require('../config/database');
const url=require('url');
//register

router.post('/register',(req,res,next)=>{
  let newUser= new User({
      username:req.body.username,
      email:req.body.email,
      password:req.body.password
  });
  User.adduser(newUser,(err,user)=>{
      if(err){
          res.json({success:false,msg:'failed to register user'});
      }else{
          res.json({success:true,msg:'user registered'});
      }

  })
})

//authenticate
router.post('/authenticate',(req,res,next)=>{
    const username = req.body.username;
    const password = req.body.password;
  
    User.getUserByUsername(username, (err, user) => {
      if(err) throw err;
      if(!user){
        return res.json({success: false, msg: 'User not found'});
      }
  
      User.comparePassword(password, user.password, (err, isMatch) => {
        if(err) throw err;
        if(isMatch){
          const token = jwt.sign({data: user}, config.secret, {
            expiresIn: 604800 // 1 week
          });
          usersinged=user._id;
          
  
          res.json({
            success: true,
            token: 'JWT ' +token,
            user: {
              id: user._id,
              username: user.username,
              email: user.email
            }
          });
        } else {
          return res.json({success: false, msg: 'Wrong password'});
        }
      });
    });
})


//profile
router.get('/profile',passport.authenticate('jwt',{session:false}),(req,res,next)=>{
  // usersinged=req.user;
  
    res.json({user:req.user});
})


//add movie
router.post('/addmovie',(req,res)=>{
  User.addmovie(req.body.id,req.body.movie,(status)=>{
    if(status){
      res.json({msg:'success'});
    }

  })
})

//remove movie

router.post('/removemovie',(req,res)=>{
  User.removeMovie(req.body.id,req.body.movie,(status)=>{
    if(status){
      res.json({msg:'movie deleted successfully'})
    }
  })
})

//add review
router.post('/addreview',(req,res)=>{
  User.addReview(req.body.id,req.body.review,(status)=>{
    if(status){
      console.log(status);
    }
  })
})

//display review
router.get('/displayreview',(req,res)=>{
 
  User.displayReview(req.query.id,(obj)=>{
    if(obj){
      res.json({review:obj});
    }
  })
})



module.exports=router;