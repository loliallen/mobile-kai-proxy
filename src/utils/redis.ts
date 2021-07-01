import redis from "redis"


const redis_options: redis.ClientOpts = {}
const client = redis.createClient(redis_options)
const getAsync = (key: string) => {
    return new Promise((resolve) => {
        client.get(key, (res) => resolve(res))
    })
} 


export default {
    client,
    getAsync
}