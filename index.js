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
    res.json({ students });
});

app.delete("/journal/:id", async (req, res) => {
    
});




app.patch("/journal/:name",async(req,res)=>{  
const result = await Journal.findOneAndUpdate(
    { name: req.params.name },
    req.body,
    { new: true }
);
res.json(result);
})
app.post("/user/save",async(req,res)=>{
 const user1 = await new user({
name:req.body.name,
issue:req.body.name,
recipient:req.body.name
});
})


















async function startServer(){
 await mongoose.connect("mongodb+srv://SE12:CSH2025@cluster0.eixzx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
 app.listen(3000, () => {
        console.log(`Server running.`);
    });
}
startServer();
