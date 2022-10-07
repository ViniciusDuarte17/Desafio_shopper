import { CustomError } from "../error/CustomError";
import { IClient, IClientDB } from "../model/client";
import { IUserDatabaseRepository } from "../repository/userDatabaseRepository";
import { BaseDatabase } from "./BaseDatabase";


export class UserDatabase extends BaseDatabase implements IUserDatabaseRepository {

    private static TABLE_NAME = 'Client_Shopper'

    async getClient(name: string): Promise<IClientDB[]> {
        try {
            const client: IClientDB[] = await this.getConnection()
                .select("*")
                .from(UserDatabase.TABLE_NAME)
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
                }).into(UserDatabase.TABLE_NAME)

        } catch (error: any) {
            throw new CustomError(error.sqlMessage, error.statusCode || error.message);
        }
    }
}