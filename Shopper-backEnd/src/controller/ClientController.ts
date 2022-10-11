import { Request, Response } from "express";
import { ClientBusiness } from "../business/ClientBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { CustomError } from "../error/CustomError";
import { IClientDTO } from "../model/client";


export class ClientController {

    constructor(private clientBusiness: ClientBusiness) { }

    async signup(req: Request, res: Response): Promise<void> {
        try {
            const sinupClient: IClientDTO = {
                userName: req.body.userName,
                deliveryDate: req.body.deliveryDate
            }

            const token = await this.clientBusiness.signup(sinupClient);

            res.send({ message: `Seja bem-vindo(a), ${sinupClient.userName}. Boas compras.`, token: token }).status(200)

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

            const token = await this.clientBusiness.login(nameClient);

            res.send({ message: `Boas compras ${nameClient}.`, token: token }).status(200);

        } catch (error) {
            if (error instanceof CustomError) {
                res.send({ error: error.message }).status(400);
            }
        }
    }
} 