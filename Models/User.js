const mongoose = require("mongoose")
const passportLocalMongoose = require("passport-local-mongoose")

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        require: true,
        trim: true,
    },
    first_name: {
        type: String,
        require: true,
        trim: true,
    },
    other_name: {
        type: String,
        require: true,
        trim: true,
    },
    home_address: {
        type: String,
        require: true,
        trim: true,
    },
    city: {
        type: String,
        require: true,
        trim: true,
    },
    state: {
        type: String,
        require: true,
        trim: true,
    },
    country: {
        type: String,
        require: true,
        trim: true,
    },
    mobile_number: {
        type: String,
        require: true,
        trim: true,
    },
    email: {
        type: String,
        require: true,
        trim: true,
    },
    password: {
        type: String,
        require: true,
        trim: true,
    },       
    photo: {
        type: String,
        require: true,
        trim: true,
    }     
},
    {timestamps: {createdAt: "created_at"}}
)

userSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model("users", userSchema)