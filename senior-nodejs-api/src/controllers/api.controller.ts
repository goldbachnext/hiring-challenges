import axios from "axios";
import { NextFunction, Request, Response } from 'express';

export class ApiController {
    constructor(){}

    public async getAll(req: Request, res: Response, next: NextFunction): Promise<Response> {
        const result = await axios.get("https://api.publicapis.org/entries");
        return res.status(200).send(result.data)
    }
}