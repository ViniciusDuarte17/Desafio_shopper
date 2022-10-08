import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { CustomError } from "../error/CustomError";
import { IClientDTO } from "../model/client";


export class UserController {

    constructor(private userBusiness: UserBusiness) { }

    async signup(req: Request, res: Response): Promise<void> {
        try {
            const sinupClient: IClientDTO = {
                userName: req.body.userName,
                deliveryDate: req.body.deliveryDate
            }

            const token = await this.userBusiness.signup(sinupClient);

            res.send({ message: 'Cliente registrado, boas compras.', token: token }).status(200)

        } catch (error: any) {

            if (error instanceof CustomError) {
                res.send({ error: error.message }).status(400)
            }
        }
        await BaseDatabase.destroyConnection();
    }

    async login(req: Request, res: Response): Promise<void> {
        try {
            const nameClient = req.body.userName as string

            const token = await this.userBusiness.login(nameClient)

            res.send({ message: 'Cliente logado, boas compras.', token: token }).status(200)

        } catch (error) {
            if (error instanceof CustomError) {
                res.send({ error: error.message }).status(400)
            }
        }
    }
} 