const express=require('express');
const bodyparser=require('body-parser');
const cors=require('cors');
const mongoose=require('mongoose');
const passport=require('passport');
const path=require('path');
const config=require('./config/database');

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

app.use(bodyparser.json());

app.use('/users',users);
  
app.get('/',(req,res)=>{
    res.send('invalid endpt');
});
app.listen(port,()=>{
    console.log('server started'+port);
})