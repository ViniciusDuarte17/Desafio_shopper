
export interface IClient {
    id: string,
    userName: string,
    deliveryDate: Date | string
}

export interface IClientDTO {
    userName: string,
    deliveryDate: string
}

export interface IClientDB {
    id: string,
    user_name: string,
    deliveryDate: Date | string
}

