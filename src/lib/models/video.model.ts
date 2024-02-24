import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
    {
        title:{
            type:String,
            required:true,
            minLength:3
        },
        description:{
            type:String,
            required:true,
            minLength:10
        },
        videoLink:{
            type:String,
            required:true
        },
        votes:{
            type:Number,
            default:0
        },
        author:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"User",
            required:true,
        },
        communityId:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"Community",
            required:true,
        }
    },
    {
        timestamps:true
    }
)

export const Video = mongoose.models.Video || mongoose.model("Video", videoSchema);