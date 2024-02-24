import mongoose from "mongoose";


const postSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            require:true,
            minLength:3
        },
        content:{
            type:String,
            require:true,
            minLength:10
        },
        votes:{
            type:Number,
            default:0
        },
        author:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"User",
            require:true,
        },
        communityId:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"Community",
            require:true,
        }
    },
    {
        timestamps:true
    }
);

export const Post = mongoose.models.Post || mongoose.model("Post",postSchema);