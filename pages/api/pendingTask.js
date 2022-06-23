import connectDB from "../../middleware/mongodb"
import Addtask from "../../models/addTasks"

const handler = async(req,res) => {
    try{
        const getTask = await Addtask.find({completed : false});
        res.status(200).json(getTask);
    } catch (error){
        res.status(404).json({message: error.message});
    }
};

export default connectDB(handler);