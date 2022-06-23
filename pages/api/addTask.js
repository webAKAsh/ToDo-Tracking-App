import connectDB from "../../middleware/mongodb"
import Addtask from "../../models/addTasks"

const handler = async(req,res) => {
    if(req.method === "POST"){
        const {task, dueDate, category} = req.body;
        if(task && dueDate && category){
            try{
                let addTask = new Addtask({
                    task,
                    dueDate,
                    category
                });
                let taskAdded = await addTask.save();
                return res.status(200).send(taskAdded);
            } catch(error){
                return res.status(500).send(error.message);
            }
        }
    } else {
        res.status(422).send("data_incomplete")
    }
};

export default connectDB(handler);