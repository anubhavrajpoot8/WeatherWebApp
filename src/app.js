const express=require('express');
const path=require('path');
const hbs=require('hbs');
const app=express();
const port=process.env.PORT || 8000;

const static_path=path.join(__dirname,'../pubic');
const templates_path=path.join(__dirname,'../templates/views');
const partial_path=path.join(__dirname,'../templates/partials');
app.use(express.static(static_path));

app.set('view engine','hbs');
app.set('views',templates_path)
hbs.registerPartials(partial_path);

app.get("/",(req,res)=>{
    res.render("index");
})

app.get("/about",(req,res)=>{
    res.render("about");
})

app.get("/weather",(req,res)=>{
    res.render("weather");
})

app.get("*",(req,res)=>{
    res.render("404error");
})

app.listen(port,()=>{
    console.log(`listening bro at port no ${port}`);
});