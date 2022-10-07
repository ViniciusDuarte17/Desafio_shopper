import { BaseDatabase } from "./BaseDatabase";

export class Migrations extends BaseDatabase {
    createTable = () =>
        this.getConnection()
            .raw(
                ` 
                    CREATE TABLE IF NOT EXISTS Client_Shopper(
                        id VARCHAR(180) PRIMARY KEY,
                        user_name VARCHAR(100) NOT NULL,
                        deliveryDate datetime
                        );

                        CREATE TABLE IF NOT EXISTS PRODUTO_SHPPER (
                            id INT PRIMARY KEY,
                            name VARCHAR(100) NOT NULL,
                            price FLOAT,
                            qty_stock INT
                        );

                        CREATE TABLE IF NOT EXISTS PRODUTO_SHPPER (
                            id INT PRIMARY KEY,
                            name VARCHAR(100) NOT NULL,
                            price FLOAT,
                            qty_stock INT
                            );
 `
            )
            .then(() => console.log("Tabela criada com sucesso"))
            .catch((error: any) => console.log(error.sqlMessage || error.message));
    closeConnection = () => this.getConnection().destroy();
}

const migrations = new Migrations();
migrations.createTable().finally(migrations.closeConnection);