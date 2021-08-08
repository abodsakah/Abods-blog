var mysql = require("promise-mysql");
var conf = require("../conf/db/dbConfig.json");

let db;

(async function (err)
{
    db = await mysql.createConnection(conf);
    if(err) {console.log(err);}
    process.on("exit", () =>
    {

        db.end();
    });
})();

async function getUserByEmail(email) {
    let sql = `SELECT * FROM User WHERE email = ? LIMIT 1`;
    let result = await db.query(sql, [email]);
    return await result;
}

module.exports = {
    getUserByEmail
};
