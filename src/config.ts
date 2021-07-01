import {config} from "dotenv"

config()

const port = process.env.PORT
const proxy = process.env.PROXY_IP

export default {
    port: port || 6666,
    proxy_url: proxy || "",
    cache_time: 60 * 5
}