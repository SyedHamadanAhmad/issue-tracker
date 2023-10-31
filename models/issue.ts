import { Schema, mongo } from "mongoose";
import mongoose from "mongoose";


const issueSchema= new Schema(
    {
        title:String,
        description:String
    }
    ,{
        timestamps:true
    }
)

const Issue= mongoose.models.Issue || mongoose.model("Issue", issueSchema)

export default Issue