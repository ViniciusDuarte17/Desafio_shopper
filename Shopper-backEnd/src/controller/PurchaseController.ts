import { Request, Response } from "express";
import { PurchaseBusiness } from "../business/PurchaseBusiness";
import { CustomError } from "../error/CustomError";
import { IPurchaseDTO } from "../model/purchase";



export class PurchaseController {
    constructor(private purchaseBusiness: PurchaseBusiness) { }


    async insertPurchase(req: Request, res: Response): Promise<void> {
        try {
            const token = req.headers.authorization as string;
            const purchase: IPurchaseDTO = {
                cart_items: req.body.cartItems,
                total_price: req.body.price,
                deliveryDate: req.body.deliveryDate
            }

            await this.purchaseBusiness.addPurchase(purchase, token)

            res.status(201).send({ message: 'compra realizada!' })

        } catch (error: any) {
            if (error instanceof CustomError) {
                res.send({ error: error.message }).status(400)
            }
        }
    }

}

