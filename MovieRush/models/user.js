const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const config=require('../config/database');
const ObjectId=require('mongoose').Types.ObjectId;

//user model

const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    watchlist:{
        type:Array
    },
    review:{
        type:Object
    }
});

const User=module.exports=mongoose.model('User',userSchema);

module.exports.getuserById=function(id,callback){
    User.findById(id,callback);
}

module.exports.getUserByUsername=function(username,callback){
    const query={username:username};
    User.findOne(query,callback);
}

module.exports.adduser=function(newUser,callback){
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(newUser.password,salt,(err,hash)=>{
            if(err)throw err;
            newUser.password=hash;
            newUser.save(callback)
        })

    })
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
  bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
    if(err) throw err;
    callback(null, isMatch);
  });
}

module.exports.addmovie=function(id,movie,callback){
   if(!ObjectId.isValid(id)){
       callback(null,false);
   }else{
       User.findById(id,(err,doc)=>{
           if(!err){
             User.updateOne(
                 {"_id":doc.id},
                {$push:{"watchlist":movie}}
                // {upsert: true}
              
            ).then((obj)=>{
                callback(obj.acknowledged);

            }).catch((err)=>{
                console.log(err);
            })
            
           }else{
            
           
               throw err;
           }
       });
   }
}