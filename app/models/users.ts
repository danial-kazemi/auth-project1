import mongoose,{Schema} from "mongoose";
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
    isActive : {
        type: Boolean,
        default: true,
    },
    image_url: {
        type: String,
        required: true,
        default: "/assets/images/user/userAvatar1.webp"
    },
    address: {
        type: String,
        required: false
    },
    phone: {
        type: String,
        required: false
    },
    role: {
        type: [String],
        required: true,
        default : "user"
    },
    date: {
        type: Date,
        required: true,
    } 
}, { autoCreate: false, autoIndex: false })
const UserModel = mongoose.models.User || mongoose.model("User", userSchema)
export default UserModel;
