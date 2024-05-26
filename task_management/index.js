const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const app = express();
const tmsRouter = require("./tmsRoutes")

app.use(cors())
app.use(bodyParser.json());
app.use("/tasks",tmsRouter);
app.use((error,req,res,next) => {
    res.status(500).send("Internal Server Occured");
})

const PORT=5010;
app.listen(PORT, function(){
    console.log(`server is running at ${PORT}`);
})