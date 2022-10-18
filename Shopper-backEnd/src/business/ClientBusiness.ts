import { ClientNotFound, CustomError, DateInvalid, InvalidSinup } from "../error/CustomError";
import { IClient, IClientDTO } from "../model/client";
import { IClientDatabaseRepository } from "../repository/ClientDatabaseRepository";
import { IAuthenticator, IHashManger, IIDGenerator } from "../ports/Ports";


export class ClientBusiness {
    constructor(
        private clientDatabase: IClientDatabaseRepository,
        private idGenerator: IIDGenerator,
        private authenticator: IAuthenticator,
        private hashManager: IHashManger
    ) { }

    public async signup(client: IClientDTO): Promise<string> {
        const { userName, password } = client;

        if (!userName || !password) {
            throw new InvalidSinup()
        }

        const validateClient = await this.clientDatabase.getClient(userName)

        if (validateClient[0]) {
            throw new CustomError("Usuário já existe", 401)
        }

        const hashPassword = await this.hashManager.hash(password);

        const id = this.idGenerator.generate()

        const user: IClient = {
            id,
            userName,
            password: hashPassword
        }

        await this.clientDatabase.signupClient(user)

        const accessToken = this.authenticator.generateToken({ id })

        return accessToken
    }

    public async login(nameClient: string, password: string): Promise<string> {

        if (!nameClient || !password) {
            throw new InvalidSinup()
        }

        const validadeClient = await this.clientDatabase.getClient(nameClient)

        if (!validadeClient[0]) {
            throw new ClientNotFound()
        }

        const hashCompare = await this.hashManager.compare(password, validadeClient[0].password);

        if (!hashCompare) {
            throw new CustomError("Invalid Password!", 401);
        }

        const id = validadeClient[0].id

        const token = this.authenticator.generateToken({ id })

        return token
    }
}