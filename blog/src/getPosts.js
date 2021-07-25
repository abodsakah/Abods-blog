var mysql = require('promise-mysql');
var conf = require('../config/dbConfig.json');

let db;


(async function ()
{
    db = await mysql.createConnection(conf);

    process.on("exit", () =>
    {
        db.end();
    });
})();


async function getPosts() {
    let sql = "SELECT * FROM Articals ORDER BY id DESC";
    let result = await db.query(sql);
    return await result;
}

async function getPostById(id)
{
    let sql = "SELECT * FROM Articals WHERE id = ? ORDER BY id DESC";
    let isnum = /^\d+$/.test(id);
    if (isnum)
    {
        let result = await db.query(sql, [id]);
        return await result[0];
    } else
    {
        return [];
    }
}

async function getEditorChoice()
{
    let sql = "SELECT * FROM editors_choice ORDER BY post_id DESC";
    let result = await db.query(sql);
    return await result;
}

module.exports = {
    getPosts,
    getPostById,
    getEditorChoice
};