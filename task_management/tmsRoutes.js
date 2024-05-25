const { Router } = require("express");
const router = Router();
const Task = require("./db")

router.post('/create', async function(req,res){
    console.log("inside create function")
    const title = req.body.title;
    const description = req.body.description;
    const status = req.body.status;
    const task =  await Task.create({
        title,description,status
    });
    res.status(200).json({"msg" : "Task created successfully", "taskId": task._id});

})

router.post('/update', async function(req,res){
    console.log("Updating the task");
    const title = req.body.title;
    const status = req.body.status;
    const updateResp = await Task.updateOne({ 'title' : title, 'status' : status });
    res.status(200).json({"msg": "Task updated successfully", "updateResponse" : updateResp});
})

router.delete('/delete/:title', async function(req, res){
    console.log("Deleting the task");
    const title = req.params.title;
    const deletedTask = await Task.deleteOne({'title' : title});
    if(deletedTask.count){
        res.status(201).json({"msg" : "Task deleted successfully", "deletedTask": deletedTask});
    }
    else{
        res.status(404).json({"msg" : "No task found"});
    }
})

router.get('/fetchListing', async function(req,res){
    console.log("fetching the list of tasks");
    const taskList = await Task.find({});
    res.send(taskList);
})

module.exports = router;