import express from "express";
import { PurchaseBusiness } from "../business/PurchaseBusiness";
import { PurchaseController } from "../controller/PurchaseController";
import { ProductDatabase } from "../data/ProductDatabase";
import { PurchaseDatabase } from "../data/PurchaseDatabase";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";


export const purchasetRouter = express.Router();

const purchaseDatabase = new PurchaseDatabase()
const productDatabase = new ProductDatabase()
const idGenerator = new IdGenerator()
const authenticator = new Authenticator()
const purchaseBusiness = new PurchaseBusiness(purchaseDatabase, idGenerator, authenticator, productDatabase)
const purchaseController = new PurchaseController(purchaseBusiness)


purchasetRouter.post("/", (res, req) => purchaseController.insertPurchase(res, req));