import { CustomError } from "../error/CustomError";
import { IPurchase } from "../model/purchase";
import { IPurchaseDatabase } from "../repository/purchaseDatabaseRepository";
import { BaseDatabase } from "./BaseDatabase";



export class PurchaseDatabase extends BaseDatabase implements IPurchaseDatabase {
    private static TABLE_NAME = 'CLIENT_PURCHASE'

    async AddPurchase(purchase: IPurchase): Promise<void> {
        try {
            await this.getConnection()
                .insert(purchase)
                .from(PurchaseDatabase.TABLE_NAME)

        } catch (error: any) {
            throw new CustomError(error.sqlMessage, error.statusCode || error.message);
        }
    }
}