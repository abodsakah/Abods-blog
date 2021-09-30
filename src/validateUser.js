const { Sequelize, QueryTypes } = require('sequelize');
const dotenv = require('dotenv').config({ path: './.env' });

const db = new Sequelize(dotenv.parsed.DB_NAME, dotenv.parsed.DB_LOGIN, dotenv.parsed.DB_PASSWORD, {
    host: dotenv.parsed.DB_HOST,
    dialect: 'mysql',
});

async function getUserByEmail(email)
{
    const result = await db.query("SELECT * FROM User WHERE email = ? LIMIT 1", { type: QueryTypes.SELECT, replacements: [email] });
    return result;
}

module.exports = {
    getUserByEmail
};
