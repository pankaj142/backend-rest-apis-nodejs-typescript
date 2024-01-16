import { pino } from "pino";
import dayjs from "dayjs";

const logger = pino({
    formatters : {
        level : (lable) =>{
            return {level : lable.toUpperCase()}
        },
    },
    timestamp :() =>`,"time":"${dayjs().format("YYYY-MM-DDTHH:mm:ssZ[Z]")}"`
})

// if any object data need to send to logger, apart from the main message then pass it as first argument in logger

export default logger;