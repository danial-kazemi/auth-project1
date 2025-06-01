import mongoose,{Document, Schema} from "mongoose";
const userSchema:Schema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    image_url: {
        type: String,
        required: false,
    },
    role: {
        type: [String],
        required: true,
        default : "user"
    } 
}, { autoCreate: false, autoIndex: false })
const User = mongoose.model("User", userSchema);
export default User;
