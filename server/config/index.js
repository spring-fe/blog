/**
 * @author {benyuwan@gmail.com}
 * @file server端配置文件
 */

export const db = {
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: 'shuminli123',
    multipleStatements: true
}

export const dbName = {
    database: 'ashen_db'
}

export const port = 3000

export const baseApi = 'api/v1'

export const secret = 'ashen-one'
