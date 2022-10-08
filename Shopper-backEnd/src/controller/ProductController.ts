import { Request, Response } from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { CustomError } from "../error/CustomError";


export class ProductController {
    constructor(private productBusiness: ProductBusiness) { }

    async getProduct(req: Request, res: Response): Promise<void> {
        try {
            const token = req.headers.authorization as string;

            const product = await this.productBusiness.getProduct(token)

            res.status(200).send({ product: product })

        } catch (error) {
            if (error instanceof CustomError) {
                res.send(error.message).status(400)
            }
        }
    }
}