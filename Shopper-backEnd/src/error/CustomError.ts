

export class CustomError extends Error {

    constructor(
        message: string,
        statusCode: number
    ) {
        super(message)
    }
}

export class ClientNotFound extends CustomError{
    constructor() {
        super("Cliente não encontrado", 404)
    }
}

export class InvalidSinup extends CustomError {
    constructor() {
        super("É necessário preencher todos os campos", 422)
    }
}

export class Unauthorized extends CustomError {
    constructor() {
        super("token expirado!", 401)
    }
}
export class DateInvalid extends CustomError {
    constructor() {
        super("Data incorreta, passe uma data futura!", 401)
    }
}

export class InvalidToken extends CustomError {
    constructor() {
        super("É necessário passar o token no herders authorization", 422)
    }
}