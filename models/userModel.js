import mongoose from 'mongoose';
import bcrypt from 'bcryptjs'
const userSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    india: Number,
    omen: Number,
    us: Number,
    growth: Number,
    loss: Number

}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);
export default User;