import mongoose, { mongo } from "mongoose";


// Function to connect to the MongoDB database
const connectDB = async () => {
    mongoose.connection.on('connected',() => console.log('Database Connecteed'))

    await mongoose.connect(`${process.env.MONGODB_URL}/job-portal`)
}



export default connectDB;