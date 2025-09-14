import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: String, // chemist or supplier
  region: String,
});

export default mongoose.model("User", userSchema);
