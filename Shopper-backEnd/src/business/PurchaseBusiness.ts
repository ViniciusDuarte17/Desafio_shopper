import { ClientNotFound, CustomError, InvalidToken } from "../error/CustomError";
import { IPurchase, IPurchaseDTO } from "../model/purchase";
import { IAuthenticator, IIDGenerator } from "../ports/Ports";
import { IPurchaseDatabase } from "../repository/purchaseDatabaseRepository";



export class PurchaseBusiness {
    constructor(
        private purcahseDatabase: IPurchaseDatabase,
        private idGenerator: IIDGenerator,
        private authenticator: IAuthenticator
    ) { }

    async addPurchase(purchase: IPurchaseDTO, token: string) {
        try {
            const { cart_items, total_price } = purchase

            if (!token) {
                throw new InvalidToken()
            }

            if (!cart_items || !total_price) {
                throw new CustomError("inválido registro de compra.", 402)
            }

            const authorClient = this.authenticator.getTokenData(token)

            const idClient = authorClient.id

            if (!idClient) {
                throw new ClientNotFound()
            }

            const id = this.idGenerator.generate()

            const cart = JSON.stringify(cart_items);

            const insertPurchase: IPurchase = {
                id: id,
                id_client: idClient,
                cart_items: cart,
                total_price: total_price
            }

            await this.purcahseDatabase.AddPurchase(insertPurchase)

        } catch (error: any) {
            throw new CustomError(error.statusCode || error.message, error.statusCode);
        }
    }
}