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
    reviews:{
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
                {$addToSet:{"watchlist":movie}}
         
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

module.exports.removeMovie=function(userid,movie,callback){
    User.findById(userid,(err,doc)=>{
        if(!err){
            User.updateOne(
                {"_id":doc.id},
                {$pull: { "watchlist": movie }}
            ).then((obj)=>{
                console.log(obj);
                callback(obj.acknowledged);
            }).catch((err)=>{
                console.log(err);

            })

        }
    })
}

module.exports.addReview=function(userid,review,callback){
    User.findById(userid,(err,doc)=>{
        if(!err){
            console.log(doc);
            User.updateOne(
                {"_id":doc.id},
                {$addToSet: { "reviews": review }}
            ).then((obj)=>{
                // console.log(obj);
                callback(obj.acknowledged);
            }).catch((err)=>{
                console.log(err);

            })

        }
    })
    
}

module.exports.displayReview=function(imdbID,callback){
    User.aggregate(
        [
            {$match:{"reviews.imdbID":imdbID}},
            {$project:{
                "reviews":{
                    $filter:{
                        input:"$reviews",
                        as:"review",
                        cond:{$eq:["$$review.imdbID",imdbID]}

                    }
                }

            }},
            {$project:{review:"$reviews"}}

        ]
    ).then(obj=>{
        if(obj){
            return callback(obj);
        }else{
            return callback(false);
        }
    }).catch((err)=>{
        console.log(err);
    })
}