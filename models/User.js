const { required } = require('joi');
const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        trim: true
    },
    role:{
        type:String,
        required: true
    },
    cart:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }
    ]
})

userSchema.plugin(passportLocalMongoose); //responsible for the functionality of plm

let User = mongoose.model('User', userSchema);
module.exports = User;