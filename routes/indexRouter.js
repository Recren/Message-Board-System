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

module.exports = indexRouter;