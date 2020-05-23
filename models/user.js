const mongoose = require('mongoose')
const Schema = mongoose.Schema

let UserSchema = new Schema(
    {
        name: {
            firstName: {type:String,required:true},
            lastName: {type:String,required:true}
        },
        identification: {
            type: {type:String,required:true},
            number:{type:Number,required:true}
        },
        username: {type:String,required:true,minlength:8,unique:true},
        password: {type:String,required:true},
        photo: {type:String},
        active: {type:Boolean},
        description: {type:String}
    }
)

module.exports = mongoose.model('User',UserSchema)