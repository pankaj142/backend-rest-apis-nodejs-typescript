import mongoose from "mongoose";
import config from "config";

async function connect(){ //myproducts
    const DB_URI = config.get<string>("DB_URI");
    try {
        await mongoose.connect(DB_URI);
        console.log("DB is connected.")
    }catch(error){
        console.log("Cound not connect to DB", error);
        process.exit(1);
    }
}
export default connect;