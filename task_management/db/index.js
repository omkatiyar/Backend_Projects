const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://omkatiyar:Iammostwanted123@cluster0.n5aqnqn.mongodb.net/")

const TaskSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: String
})

const Task = mongoose.model('Task',TaskSchema);

module.exports(Task);