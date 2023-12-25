import express from "express";
import config from "config";
import connect from "./utils/connect";

const app = express();
const PORT = config.get<"number">("PORT");

app.listen(PORT, async()=>{
    await connect()
    console.log(`Server is running ${PORT}`)
})