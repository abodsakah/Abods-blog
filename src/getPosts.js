const { Sequelize, QueryTypes } = require('sequelize');
const dotenv = require('dotenv').config({ path: './.env' });

const db = new Sequelize(dotenv.parsed.DB_NAME, dotenv.parsed.DB_LOGIN, dotenv.parsed.DB_PASSWORD, {
    host: dotenv.parsed.DB_HOST,
    dialect: 'mysql',
});


async function getPosts()
{
    const result = await db.query("SELECT * FROM Articals ORDER BY id DESC", { type: QueryTypes.SELECT })
    return result;
}

async function getPostLimit()
{
    const result = await db.query("SELECT * FROM Articals ORDER BY id DESC LIMIT 5", { type: QueryTypes.SELECT })
    return result;
}

async function getPostById(id)
{
    
    let isnum = /^\d+$/.test(id);
    if (isnum)
    {
        const result = await db.query("SELECT * FROM Articals WHERE id = ? ORDER BY id DESC", { type: QueryTypes.SELECT, replacements: [id] })
        return result;
    }
    
    return [];
    
    
}

async function getEditorChoice()
{
    const result = await db.query("SELECT * FROM `banners`", { type: QueryTypes.SELECT })
    return result;
}

async function getPageByLink(link)
{
    const result = await db.query("SELECT * FROM pages WHERE premalink = ?", { type: QueryTypes.SELECT, replacements: [link] })
    return result;
}

module.exports = {
    getPosts,
    getPostById,
    getEditorChoice,
    getPageByLink,
    getPostLimit,
    
};