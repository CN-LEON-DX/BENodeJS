import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize (
    process.env.NAME_DB, // database name
    process.env.USERNAME_DB, //user name
    process.env.PASSWORD_DB, // password
    {
        host:  process.env.HOST_DB, // link hosting
        dialect: 'mysql'   // type of database
    }
);

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');

}).catch((err: any) => {

    console.error('Unable to connect to the database:', err);
    
});

export default sequelize;