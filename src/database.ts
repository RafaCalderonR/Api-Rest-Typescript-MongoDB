import { createPool, Pool } from 'mysql2/promise'

export async function connect(): Promise<Pool> {
    const connection = await createPool({
        host: 'mysqldb',
        port:3306,
        user: 'user',
        password: 'password',
        database: 'books',
        connectionLimit: 10
    });
    return connection;
}