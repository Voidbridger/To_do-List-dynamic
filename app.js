const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

var app = express();
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

const mongoose = require("mongoose");
const { name } = require("ejs");
mongoose.connect("mongodb://localhost:27017/todo");

const trySchema = new mongoose.Schema({
    name:String
});

const item = mongoose.model("task",trySchema);

const todo= new item({
    name:"create Some Videos"
});
const todo2= new item({
    name:"Learn Dsa"
});
const todo3= new item({
    name:"Learn react"
});
const todo4= new item({
    name:"Take some rest"
});
/*todo2.save();
todo3.save();
todo4.save();*/
app.get("/",async function (req,res){
    foundItems = await item.find({}); 
    console.log(foundItems);
    res.render("list1", {ele : foundItems});
});

app.post("/",function(req,res){
    const itemName = req.body.elel;
    const todo5= new item({
        name : itemName
    });
    todo5.save();
    res.redirect("/");
})
app.post("/delete", function(req,res){
    const checked=req.body.checkbox1;
    item.findByIdAndDelete(checked)
    .then(() => res.redirect("/"));

});
app.listen("3000",function(){
    console.log("Server Active");
});