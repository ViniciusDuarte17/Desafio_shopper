import { IProductDb } from "../model/product";


export interface IProductRepository {
    getProduct(): Promise<IProductDb[] | undefined>
    updateStockProduct(id: number, newValueStock: number): Promise<void>
}