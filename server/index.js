const express=require('express')
const mysql=require('mysql')
const cors=require('cors')
const app=express()
app.use(express.json())
app.use(cors())
app.listen(3000)
const con=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
     database:'mern'
    
})
app.post('/login',(req,res)=>{
    const que="SELECT * FROM log WHERE uname=? and pwd=?"
    const uname=req.body.uname
    const pwd=req.body.pwd
    con.query(que,[uname,pwd],(err,result)=>{
        if(err){
            throw err
        }
        if(result.length>0){
            res.send({Login:true})
        }else{
            res.send({Login:false})
        }
    })
})