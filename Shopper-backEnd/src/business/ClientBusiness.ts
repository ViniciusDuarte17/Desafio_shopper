import { ClientNotFound, CustomError, DateInvalid, InvalidSinup } from "../error/CustomError";
import { IClient, IClientDTO } from "../model/client";
import { IClientDatabaseRepository } from "../repository/ClientDatabaseRepository";
import moment from 'moment';
import { ValidateDate } from "../services/CheckDate";
import { IAuthenticator, IIDGenerator } from "../ports/Ports";


export class ClientBusiness {
    constructor(
        private clientDatabase: IClientDatabaseRepository,
        private idGenerator: IIDGenerator,
        private authenticator: IAuthenticator
    ) { }


    public async signup(client: IClientDTO): Promise<string> {
        const { userName, deliveryDate } = client;

        if (!userName || !deliveryDate) {
            throw new InvalidSinup()
        }

        const validadeClient = await this.clientDatabase.getClient(userName)

        if (validadeClient[0]) {
            throw new CustomError("Usuário já existe", 401)
        }

        const newformDate = moment(deliveryDate, "YYYY-MM-DD").format(
            "DD-MM-YYYY"
        );

        const invalidDate = ValidateDate(newformDate)

        if (!invalidDate) {
            throw new DateInvalid();
        }

        const id = this.idGenerator.generate()

        const dataValida = moment(newformDate, "DD-MM-YYYY").format("YYYY-MM-DD")

        const user: IClient = {
            id,
            userName,
            deliveryDate: dataValida
        }

        await this.clientDatabase.signupClient(user)

        const accessToken = this.authenticator.generateToken({ id })

        return accessToken
    }

    public async login(nameClient: string): Promise<string> {

        if (!nameClient) {
            throw new InvalidSinup()
        }

        const validadeClient = await this.clientDatabase.getClient(nameClient)

        if (!validadeClient[0]) {
            throw new ClientNotFound()
        }

        const id = validadeClient[0].id

        const token = this.authenticator.generateToken({ id })

        return token
    }
}