import connectDB from "../../middleware/mongodb"
import Addtask from "../../models/addTasks"
import mongoose from "mongoose";

const handler = async(req,res) => {
    const { id } = req.query;

    if(!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json(console.log(`${id} does not exist`));

    await Addtask.findByIdAndUpdate(id, {"completed" : "true"},{new : true});
    res.status(200).json(Addtask);

};

export default connectDB(handler);