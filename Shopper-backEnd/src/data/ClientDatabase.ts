import { CustomError } from "../error/CustomError";
import { IClient, IClientDB } from "../model/client";
import { IClientDatabaseRepository } from "../repository/ClientDatabaseRepository";
import { BaseDatabase } from "./BaseDatabase";


export class ClientDatabase extends BaseDatabase implements IClientDatabaseRepository {

    private static TABLE_NAME = 'Client_Shopper'

    async getClient(name: string): Promise<IClientDB[]> {
        try {
            const client: IClientDB[] = await this.getConnection()
                .select("*")
                .from(ClientDatabase.TABLE_NAME)
                .where("user_name", "=", name)

            return client
        } catch (error: any) {
            throw new CustomError(error.sqlMessage, error.statusCode || error.message);
        }
    }

    public signupClient = async (client: IClient): Promise<void> => {

        try {
            await this.getConnection()
                .insert({
                    id: client.id,
                    user_name: client.userName,
                    deliveryDate: client.deliveryDate
                }).into(ClientDatabase.TABLE_NAME)

        } catch (error: any) {
            throw new CustomError(error.sqlMessage, error.statusCode || error.message);
        }
    }
}