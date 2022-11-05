import { CustomError } from "../error/CustomError";
import { IProductDb } from "../model/product";
import { IProductRepository } from "../repository/productDatabaseRepository";
import { BaseDatabase } from "./BaseDatabase";


export class ProductDatabase extends BaseDatabase implements IProductRepository {

    private static TABLE_NAME = 'PRODUTO_SHPPER'

    async getProduct(): Promise<IProductDb[] | undefined> {
        try {
            const product: IProductDb[] = await this.getConnection()
                .select("*")
                .from(ProductDatabase.TABLE_NAME)
            return product
        } catch (error: any) {
            throw new CustomError(error.sqlMessage, error.statusCode || error.message);
        }
    }

    async updateStockProduct(id: number, newValueStock: number): Promise<void> {
        try {
            await this.getConnection()
                .where({ id })
                .update({
                    qty_stock: newValueStock
                })
                .from(ProductDatabase.TABLE_NAME)

        } catch (error: any) {
            throw new CustomError(error.sqlMessage, error.statusCode || error.message);
        }
    }
}