import express from "express";
import { ClientBusiness } from "../business/ClientBusiness";
import { ClientController } from "../controller/ClientController";
import { ClientDatabase } from "../data/ClientDatabase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";


export const clientRouter = express.Router();

const clientDatabase = new ClientDatabase();
const idGeneretor = new IdGenerator();
const authenticator = new Authenticator();
const hashManger = new HashManager();
const clientBusiness = new ClientBusiness(clientDatabase, idGeneretor, authenticator, hashManger);
const clientController = new ClientController(clientBusiness);


clientRouter.post('/signup', (res, req) => clientController.signup(res, req));
clientRouter.post('/login', (res, req) => clientController.login(res, req));