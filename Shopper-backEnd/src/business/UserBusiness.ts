import { ClientNotFound, CustomError, DateInvalid, InvalidSinup } from "../error/CustomError";
import { IClient, IClientDB, IClientDTO } from "../model/client";
import { IUserDatabaseRepository } from "../repository/userDatabaseRepository";
import moment from 'moment';
import { ValidateDate } from "../services/CheckDate";
import { IAuthenticator, IIDGenerator } from "../ports/Ports";


export class UserBusiness {
    constructor(
        private userDatabase: IUserDatabaseRepository,
        private idGenerator: IIDGenerator,
        private authenticator: IAuthenticator
    ) { }


    public async signup(client: IClientDTO): Promise<string> {
        const { userName, deliveryDate } = client;

        if (!userName || !deliveryDate) {
            throw new InvalidSinup()
        }

        const validadeClient = await this.userDatabase.getClient(userName)

        if (validadeClient[0]) {
            throw new CustomError("Usuário já existe", 401)
        }

        const newformDate = moment(deliveryDate, "DD/MM/YYYY").format(
            "DD-MM-YYYY"
        );

        const invalidDate = ValidateDate(newformDate)

        if (!invalidDate) {
            throw new DateInvalid();
        }

        const id = this.idGenerator.generate()

        const dataValida = moment(deliveryDate, "DD-MM-YYYY").format("YYYY-MM-DD")

        const user: IClient = {
            id,
            userName,
            deliveryDate: dataValida
        }

        await this.userDatabase.signupClient(user)

        const accessToken = this.authenticator.generateToken({ id })

        return accessToken
    }

    public async login(nameClient: string): Promise<string> {

        if (!nameClient ) {
            throw new InvalidSinup()
        }

        const validadeClient = await this.userDatabase.getClient(nameClient)

        if (!validadeClient[0]) {
            throw new ClientNotFound()
        }

        const id = validadeClient[0].id
      
        const token = this.authenticator.generateToken({ id })

        return token
    }
}