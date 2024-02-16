import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
    name: String,
    email: String,
    password: String,
    admin: { type: Boolean, default: false }
})


export default mongoose.model("user", userSchema);