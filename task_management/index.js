const express = require("express")
const bodyParser = require("body-parser")
const app = express();
const tmsRouter = require("./tmsRoutes")

app.use(bodyParser.json());
app.use("/task",tmsRouter);
app.use((error,req,res,next) => {
    res.status(500).send("Internal Server Occured");
})

const PORT=5010;
app.listen(PORT, function(){
    console.log(`server is running at ${PORT}`);
})