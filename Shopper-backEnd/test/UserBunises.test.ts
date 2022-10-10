import { UserBusiness } from "../src/business/ClientBusiness";
import { IClientDTO } from "../src/model/client";
import { AuthenticatorMock } from "./business/mock/AuthenticatorMock";
import { IdGeneratorMock } from "./business/mock/IdGeneratorMock";
import { UserDatabaseMock } from "./business/mock/UserDatabaseMock";



const authenticatorMock = new AuthenticatorMock();
const idGeneratorMock = new IdGeneratorMock()
const userDatabaseMock = new UserDatabaseMock();
const userBusiness = new UserBusiness(userDatabaseMock, idGeneratorMock, authenticatorMock);


describe("Testando a camada userBusiness", () => {
    test("1. caso de error userName, deliveryDate não são válido", async () => {
        try {
            expect.assertions(1);

            const mockClient = {
                userName: "",
                deliveryDate: ""
            }

            await userBusiness.signup(mockClient)
            
        } catch (error: any) {
            expect(error.message).toBe('É necessário preencher todos os campos')
        }
    })
})