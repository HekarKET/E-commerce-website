import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  address: String,
  email: String,
  password: String,
  image: {
    type: String,
    default: null,
  },
});

const userModel = mongoose.model("User", UserSchema);

export default userModel;
