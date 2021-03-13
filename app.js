
const express=require('express');
const app=express();
//http://localhost:3000/student
const bodyParser=require('body-parser');
app.use(bodyParser.json());
const st=['ahmad','adam'];

app.get('/student',(req,res)=>{
res.json(st);
})

app.post('/student',(req,res)=>{
let requestBody=req.body;
let stN=requestBody.name;
st.push(stN);
res.json(stN);
})

app.listen(3000,(res,req)=>{
console.log("the localhost accepted");
})