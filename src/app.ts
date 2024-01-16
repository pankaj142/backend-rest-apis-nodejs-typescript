import express from "express";
import config from "config";
import connect from "./utils/connect";
import logger from "./utils/logger";
import routes from "./routes";

const app = express();
const PORT = config.get<"number">("PORT");

app.listen(PORT, async()=>{
    await connect()
    logger.info(`Server is running ${PORT}` )
    routes(app);
})  