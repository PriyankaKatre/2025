import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on('connected', () => {
            console.log('Mongo DB Connected successfully')
        })
        await mongoose.connect(`${process.env.MONGODB_URL}/easyDoc`);
    } catch (error) {
    console.error("Error occurred while connecting to MongoDB:", error.message);
    process.exit(1); // Exit process with failure
  }
};
export default connectDB;
