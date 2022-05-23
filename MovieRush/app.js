const express=require('express');
const bodyparser=require('body-parser');
const cors=require('cors');
const mongoose=require('mongoose');
const passport=require('passport');
const path=require('path');
const config=require('./config/database');
const session=require('express-session');
const cookiePrser=require('cookie-parser');

//connect to db
mongoose.connect(config.database);

//verifying the connection
mongoose.connection.on('connected',()=>{
    console.log('connected to database'+config.database);
})


mongoose.connection.on('error',(err)=>{
    console.log('database error'+err);
})


const app=express();
const users=require('./routes/users');
const port=3000;



app.use(cors());

//set static folder
app.use(express.static(path.join(__dirname,'src')));

//body-parser

app.use(bodyparser.json());



//passport session
app.use(cookiePrser());
app.use(express.urlencoded({ extended: true}));
app.use(
  session({
    secret: "this_is_a_secret",
    // store: pgSessionStorage,
    resave: true,
    saveUnitialized: true,
    rolling: true, // forces resetting of max age
    cookie: {
      maxAge: 360000,
      secure: false // this should be true only when you don't want to show it for security reason
    }
  })
);
app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

app.use('/users',users);

  
app.get('/',(req,res)=>{
    res.send('invalid endpt');
});
app.listen(port,()=>{
    console.log('server started'+port);
})