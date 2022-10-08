import { ClientNotFound, CustomError, InvalidToken } from "../error/CustomError";
import { IProductDb } from "../model/product";
import { IAuthenticator } from "../ports/Ports";
import { IProductRepository } from "../repository/productDatabaseRepository";


export class ProductBusiness {
    constructor(
        private productDatabase: IProductRepository,
        private authenticator: IAuthenticator
    ) { }

    async getProduct(token: string): Promise<IProductDb[] | undefined> {
        try {

            if (!token) {
                throw new InvalidToken()
            }

            const authorClient = this.authenticator.getTokenData(token)

            if (!authorClient.id) {
                throw new ClientNotFound()
            }

            const product = await this.productDatabase.getProduct();

            if (!product) {
                throw new CustomError("Sem produto.", 404)
            }

            return product

        } catch (error) {
            if (error instanceof CustomError) {
                throw new CustomError(error.message, 400)
            }
        }
    }

}