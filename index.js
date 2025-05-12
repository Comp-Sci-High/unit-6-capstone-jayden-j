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
        recipient: { type: String, rquired: true },
    }
);

const Journal = mongoose.model("Journal", JournalSchema, "Journal");

app.get("/", async (req, res) => {
    const students = await Journal.find({});
    res.json({ students });
});

app.delete("/delte/journal/id")

app.patch("/journal/:name",async(req,res)=>{
    const res = await journalSchema.findoneAndUpdate({
name:req.params.name},
{req.body},{new:true})
 res.json(response);   
});

app.post("/user/save",async(req,res)=>{
 const user1 = await new user({
name:req.body.name,
issue:req.body.name,
recipient:req.body.name
});