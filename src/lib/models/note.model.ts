import mongoose from "mongoose";

const noteSchema = new mongoose.Schema(
    {
        pdfLink:{
            type:String,
            required:true
        },
        title:{
            type:String,
            required:true
        },
        description:{
            type:String
        },
        author:{
            type:mongoose.Types.ObjectId, 
            ref: 'User',
            required: true
        },
        communityId:{
            type:mongoose.Types.ObjectId,
            ref: 'Community'
        },
        votes:{
            type:Number,
            default:0
        },
    },
    {
        timestamps:true
    }
);

export const Note = mongoose.models.Note || mongoose.model("Note",noteSchema);