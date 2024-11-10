import mongoose from "mongoose";

const directorSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },

    lastName: {
        type:String,
        required: true
    },
    bio: String,
    birthDate:{
        required: true
    },
       isActive: {
        type: Boolean,
        default: true
      }

},{timestamps: true, versionKey:false})


const Directores = mongoose.model('Directores', directorSchema)

export default Directores