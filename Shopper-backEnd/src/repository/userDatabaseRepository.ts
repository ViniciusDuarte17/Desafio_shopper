import { IClient, IClientDB} from "../model/client";


export interface IUserDatabaseRepository {
    signupClient (client: IClient ): Promise<void>
    getClient (name: string): Promise<IClientDB[]>
}
