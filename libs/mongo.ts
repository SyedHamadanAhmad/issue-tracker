import mongoose from "mongoose";

const connectMongoDB=()=>{
    try {
        mongoose.connect('mongodb+srv://syedhamadanacads:databasepassword@database1.zz0cky0.mongodb.net/crud_db')
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log(error)
    }
}

export default connectMongoDB;