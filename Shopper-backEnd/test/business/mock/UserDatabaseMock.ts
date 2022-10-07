import { IClient } from "../../../src/model/client";
import { IUserDatabaseRepository } from "../../../src/repository/userDatabaseRepository";



export class UserDatabaseMock implements IUserDatabaseRepository {
   getProduct(): Promise<any> {
       throw new Error("Method not implemented.");
   }
   async signupClient(client: IClient): Promise<void> {
        console.log("cliente registrado")
    }

}