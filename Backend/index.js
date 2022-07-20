const express = require("express");
const connection = require("./db");
const authRouter = require("./routes/auth.routes");
const cors = require("cors")
const app = express();

app.use(cors())
app.use(express.json());

app.use("/auth",authRouter)

app.get("/", (req, res) => {
     res.send("<h1>Welcome to Myfitnesspal.com</h1>")
})

app.listen(8000, async()=>{
    try{
        await connection
        console.log("listening on http://localhost:8000")
        // console.log(connection)
    }
    catch(error) {
        console.log("error occured while starting the server")
    }
})