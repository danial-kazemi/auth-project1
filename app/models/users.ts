import mongoose,{Schema} from "mongoose";
import { unique } from "next/dist/build/utils";
const addressSchema = new mongoose.Schema({
    street: String,
    city: String,
})
const userSchema:Schema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
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
        default: "/assets/images/user/avatar-icon.svg"
    },
    address: addressSchema,
    phone: {
        type: String,
        required: false
    },
    role: {
        type: [String],        
        default : "user",
        required: true
    },
    createdAt: {
        type: Date,
        required: true,
    } ,
    updatedAt: {
        type: Date,
        required: false,
    } ,
    authProviderId: String
}, { autoCreate: false, autoIndex: false })
const User = mongoose.models?.User || mongoose.model("User", userSchema)
export default User;
