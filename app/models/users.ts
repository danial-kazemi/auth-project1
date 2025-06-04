import mongoose,{Mongoose, Schema} from "mongoose";
const userSchema:Schema = new mongoose.Schema({
    name: {
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
const UserModel = mongoose.models.user || mongoose.model("user", userSchema)  
export default UserModel;
