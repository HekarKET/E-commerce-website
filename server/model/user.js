import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  address: String,
  email: String,
  password: String,
});

const userModel = mongoose.model("User", UserSchema);

export default userModel;
