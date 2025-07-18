const mongoose = require("mongoose");
const express = require("express");
const { userInfo } = require("os");

const app = express();

app.use(express.static(__dirname + "/public"));

app.use(express.json());

app.set("view engine", "ejs");
app.use((req, res, next) => {
    console.log(`${req.method}: ${req.path}`);
    next();
});

const journalSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        issue: { type: String, required: true },
        recipient: { type: String, required: true }

    }
);

const Journal = mongoose.model("Journal", journalSchema, "Journal");

app.get("/", async (req, res) => {
    const students = await Journal.find({});
    res.render("journal.ejs",{ students });
});

app.delete("/journal/:id", async (req, res) => {
const response = await Journal.findOneAndDelete({
    _id:req.params.id
}) 
res.json(response)
});

app.get("/form",(request,response)=>{
  response.sendFile(__dirname+"/public/form.html")
})



app.patch("/journal/:id",async(req,res)=>{  
const result = await Journal.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true }
);
res.json(result);
})
app.post("/journal/save",async(req,res)=>{
 const result = await new Journal({
name:req.body.name,
issue:req.body.issue,
recipient:req.body.recipient
}).save();
res.json(result);

})


















async function startServer(){
 await mongoose.connect("mongodb+srv://SE12:CSH2025@cluster0.eixzx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
 app.listen(3000, () => {
        console.log(`Server running.`);
    });
}
startServer();
