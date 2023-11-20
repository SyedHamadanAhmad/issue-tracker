import { Schema, mongo } from "mongoose";
import mongoose from "mongoose";


const issueSchema= new Schema(
    {
        title:String,
        description:String,
        status:{
            type:String,
            default:"OPEN"
        },
        name:{
            type:String,
            default:"Anonymous"
        },
        email:{
            type:String,
            default:"xyz@gmail.com"
        }
    }
    ,{
        timestamps:true
    }
)

const Issue= mongoose.models.Issue|| mongoose.model("Issue", issueSchema) 

export default Issue