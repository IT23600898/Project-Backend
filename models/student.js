import mongoose from "mongoose";

//Create save data structure (1st step)
const studentSchema = new mongoose.Schema(
    {
        name: String,
        age: Number,
        city: String
    }
)

//Connect to the backend and db (2nd step)
const Student = mongoose.model("Student", studentSchema)
export default Student