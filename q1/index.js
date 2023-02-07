const express=require("express");
const app= express();
const path=require('path');
const bparser= require('body-parser');
app.use(express.urlencoded({extended: true}));
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))


app.get('/',(req,res)=>{
  res.render('form');
})
app.post('/addcookies',(req,res)=>{
  const key= req.body.key;
  const value= req.body.value;

  res.cookie(key,value);
  res.render('success',{key: key, value: value})
})


app.listen(3000,()=>{
  console.log("Server is working");
})