import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
    {
        author:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        chatId:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'chat'
        },
        message:{
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

export const Message = mongoose.models.Message || mongoose.model("Message", messageSchema);