import axios from "axios"
import config from "../config"


export const request = async (
    pipeline_id:number, 
    step_id:    number,
    variables:  any
) => {
    let res = await axios.get(config.proxy_url, {
        params: {
            "PipelineId": pipeline_id,
            "StepId": step_id,
            "OutputName":"Row",
            "Variables": variables
        }
    })
    res.headers['Content-Type'] = 'application/json'
    let data = res.data 
    return data
}