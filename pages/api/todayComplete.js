import connectDB from "../../middleware/mongodb"
import Addtask from "../../models/addTasks"

const handler = async(req,res) => {
    try{
        function previousDate(date = new Date()){
            const previous = new Date(date.getTime())
            previous.setDate(date.getDate() - 1);
            return previous
        }

        const then = previousDate();
        let today = new Date();

        const getTask = await Addtask.find({dueDate : {$gt: new Date(then),$lt:new Date(today)},completed: true});
        res.status(200).json(getTask);
    } catch (error){
        res.status(404).json({message: error.message});
    }
};

export default connectDB(handler);