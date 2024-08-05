const express = require("express")
const app = express()
const path = require("node:path")
const PORT = 5000;

const indexRouter = require("./routes/indexRouter")

//Parses form data
app.use(express.urlencoded({ extended: true }));

//Specify where we retrieve our pages
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")

//Allows app to use static styles for rendering
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath))

//Pull the routes from indexRouter file
app.use("/", indexRouter);

app.listen(PORT, () =>{
    console.log("Running locally on http://localhost:5000")
})