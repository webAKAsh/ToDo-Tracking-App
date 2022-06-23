import connectDB from "../../middleware/mongodb"
import Addtask from "../../models/addTasks"

const handler = async(req,res) => {
    try{
        let today = new Date()
        const getTask = await Addtask.find({completed: false , dueDate :{$lt : new Date(today)}});
        res.status(200).json(getTask);
    } catch (error){
        res.status(404).json({message: error.message});
    }
};

export default connectDB(handler);