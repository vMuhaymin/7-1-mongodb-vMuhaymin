import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  name: String,
  age: Number,
  major: String
});

const Student = mongoose.model("Student", studentSchema);

export default Student;
