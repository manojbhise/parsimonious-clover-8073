const {Router} = require("express");
const userModel = require("../model/User");

const authRouter = Router();

authRouter.get("/", async(req,res) => {
  const user = await userModel.find()
    res.send("users here")
})

// user signup part
authRouter.post("/signup",async (req,res) => {
  if(!req.body.username  || !req.body.password|| !req.body.name|| !req.body.email|| !req.body.gender ) {
     return res.status(400).send("Required all credentials to be filled")
  }
  const user = await new userModel(req.body)
  user.save((err,success) => {
    if(err) {console.log(err,"error while signup")
     res.status(404).send(err,"error while signup")
  }
    console.log(success)
    res.status(201).send(success)
  })

})
authRouter.get("/signup", (req,res) => {
   res.send("confidential")
})


// user login part

authRouter.post("/login", async(req,res) => {
  if(!req.body.email || !req.body.password) {
    return res.status(400).send("Required all credentials to be filled")
  }
  const user = await userModel.find(req.body)
  console.log(user[0])
  if(user.length >=1) {
   return res.status(201).send(user)
  }
 else {
  res.status(404).send({message:"Wrong credentials"})
 }
})



module.exports = authRouter;