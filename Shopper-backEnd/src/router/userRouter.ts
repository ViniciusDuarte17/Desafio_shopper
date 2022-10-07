import express from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserController } from "../controller/UserController";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";


export const userRouter = express.Router();

const userDatabase = new UserDatabase();
const idGeneretor = new IdGenerator();
const authenticator = new Authenticator();
const userBusiness = new UserBusiness(userDatabase, idGeneretor, authenticator);
const userController = new UserController(userBusiness);


userRouter.post('/signup', (res, req) => userController.signup(res, req));
userRouter.post('/login', (res, req) => userController.login(res, req));