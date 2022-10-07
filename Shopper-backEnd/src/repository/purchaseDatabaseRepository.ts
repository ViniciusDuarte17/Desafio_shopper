import { IPurchase } from "../model/purchase";


export interface IPurchaseDatabase {
    AddPurchase(purchase: IPurchase): Promise<void>
}