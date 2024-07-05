import mongoose from 'mongoose';
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const constantInstance = await //mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
            mongoose.connect("");
        console.log(`Mongoose Connected ${constantInstance}`);

    } catch (error) {
        console.log("MongoDb connect", error);
        process.exit(1);
    }


}

export default connectDB;
