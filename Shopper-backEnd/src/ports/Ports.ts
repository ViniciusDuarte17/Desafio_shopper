import { AuthenticationData } from "../services/Authenticator"


export interface IIDGenerator {
    generate(): string
}
export interface IAuthenticator {
    generateToken(input: AuthenticationData): string
    getTokenData(token: string): AuthenticationData
}

export interface IHashManger {
    hash(text: string): Promise<string>
    compare(text: string, hash: string): Promise<boolean>
}