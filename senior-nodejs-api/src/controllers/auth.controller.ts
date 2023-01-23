import { NextFunction, Request, Response } from 'express';
import { sign } from 'jsonwebtoken';

export class AuthController {
    constructor(){}

    public async login(req: Request, res: Response, next: NextFunction): Promise<Response> {

        const {username, password} = req.body;
        console.log(username,password)
        if (username === "user" && password === "user") return res.status(200).send({token: AuthController.createToken("User")})
        else if (username === "admin" && password === "admin") return res.status(200).send({token: AuthController.createToken("Admin")})
        return res.status(401).send({message: "Unauthorized"})
    }

    private static createToken(userRole: "Admin" | "User"): string {
        const secretKey = "superSecretKey";
        const expiresIn = 360;
        return sign({userRole}, secretKey, {expiresIn})
    }
}