module.exports = {
    HOST: 'mysqldb.cing4ikwlyqw.ap-southeast-1.rds.amazonaws.com',
    USER: 'admin',
    PASSWORD: '12345678',
    DB: 'hustCv3',
    dialect: 'mysql',
    port: 3306,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}