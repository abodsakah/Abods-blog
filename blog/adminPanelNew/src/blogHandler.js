var mysql = require("promise-mysql");
var conf = require("../conf/db/dbConfig.json");

let db;

(async function ()
{
    db = await mysql.createConnection(conf);

    process.on("exit", () =>
    {
        db.end();
    });
})();

async function getAllPosts()
{
    let sql = "SELECT * FROM Articals ORDER BY id DESC;";
    let result = await db.query(sql);
    return result;
}

async function getPostById(id)
{
    let sql = "SELECT * FROM Articals WHERE id = ?;";
    let result = await db.query(sql, id);
    return result;   
}

async function updatePost(id, title, content, header_image, tags, status, post_meta)
{
    var today = new Date();
    var date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

    let sql = "UPDATE Articals SET title = ?, body = ?, header_image = ?, tags = ?, status = ?, post_meta = ?, date_updated = ? WHERE id = ?;";
    let result = await db.query(sql, [title, content, header_image, tags, status, post_meta, date, id]);
    return result;
}

async function createPost(title, content, header_image, tags, status, post_meta, author_id)
{
    var today = new Date();
    var date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
    let sql = "INSERT INTO Articals (title, body, header_image, tags, status, post_meta, date_created, date_updated, author) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);";
    let result = await db.query(sql, [title, content, header_image, tags, status, post_meta, date, date, author_id]);
    return result;
}

async function deletePost(id)
{
    let sql = "DELETE FROM `Articals` WHERE `Articals`.`id` = ?";
    let result = await db.query(sql, [id]);

    return result;
}

async function getEditorChoice()
{
    let sql = "SELECT Articals.id, Articals.title FROM Articals INNER JOIN editors_choice ON Articals.id = editors_choice.post_id ORDER BY id DESC";
    let result = await db.query(sql);
    return result;   
}

async function deleteEditorChoice(id){
    let sql = "DELETE FROM editors_choice WHERE post_id = ?";
    let result = await db.query(sql, [id]);
    return result;
}

async function addEditorChoice(id)
{
    let sql = "INSERT INTO editors_choice (post_id) VALUES (?)";
    let result = await db.query(sql, [id]);
    return result;
}

async function getAllPages()
{
    let sql = "SELECT * FROM pages ORDER BY id DESC;";
    let result = await db.query(sql);
    return result;
}

async function createPage(title, content, header_image, status, premalink)
{
    let sql = "INSERT INTO pages (title, content, status, premalink, image) VALUES (?, ?, ?, ?, ?);";
    let result = await db.query(sql, [title, content, status, premalink,header_image]);
    return result;
}

async function deletePage(id)
{
    let sql = "DELETE FROM `pages` WHERE id = ?";
    let result = await db.query(sql, [id]);

    return result;
}

async function getPageById(id)
{
    let sql = "SELECT * FROM pages WHERE id = ? ORDER BY id DESC";
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

async function updatePage(id, title, content, header_image, status, premalink)
{
    let sql = "UPDATE pages SET title = ?, content = ?, image = ?, status = ?, premalink = ? WHERE id = ?;";
    let result = await db.query(sql, [title, content, header_image, status, premalink, id]);
    return result;
}
module.exports = {
    getAllPosts,
    getPostById,
    updatePost,
    createPost,
    deletePost,
    getEditorChoice,
    deleteEditorChoice,
    addEditorChoice,
    getAllPages,
    createPage,
    deletePage,
    getPageById,
    updatePage
};
