import express from "express";
import { ProductBusiness } from "../business/ProductBusiness";
import { ProductController } from "../controller/ProductController";
import { ProductDatabase } from "../data/ProductDatabase";
import { Authenticator } from "../services/Authenticator";



export const productRouter = express.Router();


const productDatabase = new ProductDatabase();
const authenticator = new Authenticator();
const productBusiness = new ProductBusiness(productDatabase, authenticator);
const productController = new ProductController(productBusiness);


productRouter.get('/', (res, req) => productController.getProduct (res, req));