import Logger from "../utils/logger";
import path from "path";
import { NextFunction, Request, Response } from "express";

const logger = new Logger(path.join(__dirname, "logs"))

export default (req: Request, res: Response, next: NextFunction) => {
    logger.log(`[${req.method}] ${req.path} [${req.ip}]`)
    next()
}