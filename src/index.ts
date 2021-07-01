import express from 'express';
import bodyParser from 'body-parser'
import config from './config';
import logger from './middleware/logger';
import axios from 'axios';
import crypto from 'crypto';
import redis from './utils/redis';
import { request } from './services/proxy';


const app = express()

// config
const port = config.port

// middlewares
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(logger)


app.post('/api', async (req: express.Request, res: express.Response) => {
    const {
        pipeline_id,
        step_id,
        variables
    } = req.body
    const hash = crypto.createHash("md5").update(`${pipeline_id}.${step_id}.${JSON.stringify(variables)}`).digest("hex")
    // check in redis store
    let cached = await redis.getAsync(hash)
    if (cached) {
        return res.status(200).json(cached)
    } else {
        let data = request(pipeline_id,step_id,variables)
        redis.client.set(hash, JSON.stringify(data), "EX", config.cache_time)
        return res.status(200).json(data)
    }
})


app.listen(port, ()=> {
    console.log("Server started")
})