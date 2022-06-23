import mongoose from "mongoose";
const Schema = mongoose.Schema;

var addTask = new Schema({
    task: {type : String, required: true},
    dueDate : { type : Date, required: true},
    category: {type : String, required: true},
    completed: {type : Boolean, default : false}
});

mongoose.models = {};

var Addtask = mongoose.model("Addtask", addTask);

export default Addtask;