import { ClientNotFound, CustomError, DateInvalid, InvalidToken } from "../error/CustomError";
import { InewCart, IPurchase, IPurchaseDTO } from "../model/purchase";
import { IAuthenticator, IIDGenerator } from "../ports/Ports";
import { IProductRepository } from "../repository/productDatabaseRepository";
import { IPurchaseDatabase } from "../repository/purchaseDatabaseRepository";
import moment from 'moment';
import { ValidateDate } from "../services/CheckDate";
import { IProductDb } from "../model/product";


export class PurchaseBusiness {
    constructor(
        private purcahseDatabase: IPurchaseDatabase,
        private idGenerator: IIDGenerator,
        private authenticator: IAuthenticator,
        private productDatabase: IProductRepository
    ) { }

    async addPurchase(purchase: IPurchaseDTO, token: string) {
        try {
            const { cart_items, total_price, deliveryDate } = purchase

            if (!token) {
                throw new InvalidToken()
            }

            if (!cart_items || !total_price || !deliveryDate) {
                throw new CustomError("inválido registro de compra.", 402)
            }

            const authorClient = this.authenticator.getTokenData(token)

            const idClient = authorClient.id

            if (!idClient) {
                throw new ClientNotFound()
            }

            const newformDate = moment(deliveryDate, "YYYY-MM-DD").format(
                "DD-MM-YYYY"
            );

            const invalidDate = ValidateDate(newformDate)

            if (!invalidDate) {
                throw new DateInvalid();
            }

            const dataValida = moment(newformDate, "DD-MM-YYYY").format("YYYY-MM-DD")

            const id = this.idGenerator.generate();

            const cart = JSON.stringify(cart_items);

            const newCartJson: InewCart[] = JSON.parse(cart);

            const productAll = await this.productDatabase.getProduct()

            newCartJson.forEach((product: InewCart) => {

                const productFilter = productAll?.filter(productDb => productDb.id === product.id)

                if (productFilter?.find(productDb => product.amout > productDb.qty_stock)) {
                    throw new CustomError("A quantidade solicitada não esteja disponível no estoque.", 422)
                }

                productFilter?.forEach((productDb: IProductDb) => {
                    this.productDatabase.updateStockProduct(product.id, (productDb.qty_stock - product.amout))
                })
            })

            const insertPurchase: IPurchase = {
                id: id,
                id_client: idClient,
                cart_items: cart,
                total_price: total_price,
                deliveryDate: dataValida
            }

            await this.purcahseDatabase.AddPurchase(insertPurchase)

        } catch (error: any) {
            throw new CustomError(error.statusCode || error.message, error.statusCode);
        }
    }
}