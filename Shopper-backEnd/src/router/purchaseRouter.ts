import express from "express";
import { PurchaseBusiness } from "../business/PurchaseBusiness";
import { PurchaseController } from "../controller/PurchaseController";
import { PurchaseDatabase } from "../data/PurchaseDatabase";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";


export const purchasetRouter = express.Router();

const purchaseDatabase = new PurchaseDatabase()
const idGenerator = new IdGenerator()
const authenticator = new Authenticator()
const purchaseBusiness = new PurchaseBusiness(purchaseDatabase, idGenerator, authenticator)
const purchaseController = new PurchaseController(purchaseBusiness)

purchasetRouter.post("/", (res, req) => purchaseController.insertPurchase(res, req));

