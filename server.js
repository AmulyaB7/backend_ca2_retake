const express = require('express');
const app = express();
const port = 3000;

const users = [
    {email: "Alice@examplemail.com", password: "alice123"},
    {email: "bob@examplemail.com", password: "bob456"},
    {email: "krish@examplemail.com", password: "krish789"}
]

app.get('/',(_,res)=>{
    res.send("server is running");
});

app.put('/user',(req,res)=>{
    const {email , password} = req.body;
    if(!email || !password) return res.json({message: "email and password parameters are required"});

    const user = users.find(u=>u.email===email && u.password===password);
    if(!user) return res.json({message: "user not found"})

    user.password=password;
    res.json({message: "password updated"});
});

app.delete('/user',(req,res)=>{
    const { email } = req.body;
    if(!email) return res.json({message: "email parameter cannt be empty"});

    const user = users.find(u=>u.email===email);
    if(index===-1) return res.json({message: "email not found"});

    user.splice(index,1);
    res.json({message: "User deleted successfully!!"});

});

app.listen(port, ()=> console.log(`server is running in ${port}`))