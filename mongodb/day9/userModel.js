import mongoose from "mongoose";
const userModel = new mongoose.Model({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number
   
  },
  gender: {
    type: String
  },
});
export default mongoose.model("User", userModel);