import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
  userId:Number,
  firstName: String,
  lastName: String,
  email: String,
  password: String,
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
