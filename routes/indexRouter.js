const {Router} = require("express");

const indexRouter = Router();

const messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
];

//routes for the main page
indexRouter.get("/", (req,res) =>{
    res.render("index", {messages: messages});
})

indexRouter.get("/new", (req,res) =>{
    res.render("form");
})

//Collect form data and process
indexRouter.post("/new", (req, res) =>{
    messages.push({text: req.body.message, user: req.body.user, added: new Date()})
    res.redirect("/")
})

module.exports = indexRouter;