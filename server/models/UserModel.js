import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  studentId:Number,
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
});

userSchema.methods.toJSON = function () {
  let obj = this.toObject();
  delete obj.password;
  return obj;
};

export default mongoose.model("User", userSchema);
