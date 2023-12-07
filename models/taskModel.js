import mongoose, { Schema } from "mongoose";
const taskScrema= mongoose.Schema({
    title:{
        type: String
    },
    date:{
        type: String
    },
    isfinished:{
        type: Boolean
    }
})

const Tasks = mongoose.model("Tasks",taskScrema)

export default Tasks 