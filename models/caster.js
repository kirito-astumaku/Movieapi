import mongoose from "mongoose";

const casthSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },

    lastName: {
        type:String,
        required: true
    },
    birthDate:{
        type: Date
    },
       isActive: {
        type: Boolean,
        default: true
      }

},{timestamps: true, versionKey:false})


const casth = mongoose.model('casth', casthSchema)

export default casth