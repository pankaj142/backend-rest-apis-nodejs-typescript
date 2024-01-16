import mongoose from "mongoose";
import config from "config";
import logger from "./logger";

async function connect(){ //myproducts
    const DB_URI = config.get<string>("DB_URI");
    try {
        await mongoose.connect(DB_URI);
        logger.info("DB is connected.")
    }catch(error){
        logger.error(error, "Cound not connect to DB");
        process.exit(1);
    }
}
export default connect;