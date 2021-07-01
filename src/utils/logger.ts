import fs from "fs"
import path from "path"

interface ILogger {
    log(data:string): void;
}

class Logger implements ILogger {
    constructor(private readonly path:string){}

    log(data: string){
        let date = new Date();
        fs.appendFileSync(path.join(this.path, `${date.toLocaleDateString()}.log`), `[${date.toLocaleTimeString()}]\t${data}`)
    }
}

export default Logger
