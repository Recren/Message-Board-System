const express = require("express")
const app = express()
const path = require("node:path")
const PORT = 5000;

//Specify where we retrieve our pages
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

//Allows app to use static styles for rendering
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath))

app.get("/", (req,res) =>{
    res.render("index");
})

app.listen(PORT, () =>{
    console.log("Running locally on http://localhost:5000")
})