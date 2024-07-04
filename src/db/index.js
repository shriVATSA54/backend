import mongoose from 'mongoose';
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const constantInstance = await //mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
            mongoose.connect("mongodb+srv://shrivatsaddesai:xZflJ06eo1watYqH@shrimongo.yoc63sm.mongodb.net");
        console.log(`Mongoose Connected ${constantInstance}`);

    } catch (error) {
        console.log("MongoDb connect", error);
        process.exit(1);
    }


}

export default connectDB;