import { IClient, IClientDB} from "../model/client";


export interface IClientDatabaseRepository {
    signupClient (client: IClient ): Promise<void>
    getClient (name: string): Promise<IClientDB[]>
}
