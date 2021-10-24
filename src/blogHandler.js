const { Sequelize, QueryTypes } = require('sequelize');
const dotenv = require('dotenv').config({ path: './.env' });

const db = new Sequelize(dotenv.parsed.DB_NAME, dotenv.parsed.DB_LOGIN, dotenv.parsed.DB_PASSWORD, {
    host: dotenv.parsed.DB_HOST,
    dialect: 'mysql',
});

async function getAllPosts()
{
    const result = await db.query("SELECT * FROM Articals ORDER BY id DESC;", { type: QueryTypes.SELECT });
    return result;
}

async function getPostById(id)
{
    const result = await db.query("SELECT * FROM Articals WHERE id = ?", { type: QueryTypes.SELECT, replacements: [id] });
    return result;
}

async function updatePost(id, title, content, header_image, tags, status, post_meta)
{
    var today = new Date();
    var date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

    const result = await db.query("UPDATE Articals SET title = ?, body = ?, header_image = ?, tags = ?, status = ?, post_meta = ?, date_updated = ? WHERE id = ?", { type: QueryTypes.UPDATE, replacements: [title, content, header_image, tags, status, post_meta, date, id] });
    return result;
}

async function updatePostWithoutImage(id, title, content, tags, status, post_meta)
{
    var today = new Date();
    var date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

    const result = await db.query("UPDATE Articals SET title = ?, body = ?, tags = ?, status = ?, post_meta = ?, date_updated = ? WHERE id = ?", { type: QueryTypes.UPDATE, replacements: [title, content, tags, status, post_meta, date, id] });
    return result;
}

async function createPost(title, content, header_image, tags, status, post_meta, author_id)
{
    var today = new Date();
    var date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
    const result = await db.query("INSERT INTO Articals (title, body, header_image, tags, status, post_meta, date_created, date_updated, author) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)", { type: QueryTypes.INSERT, replacements: [title, content, header_image, tags, status, post_meta, date, date, author_id] });
    return result;
}

async function deletePost(id)
{
    const result = await db.query("DELETE FROM `Articals` WHERE `Articals`.`id` = ?", { type: QueryTypes.DELETE, replacements: [id] });
    return result;
}

async function getEditorChoice()
{
    const result = await db.query("SELECT Articals.id, Articals.title FROM Articals INNER JOIN editors_choice ON Articals.id = editors_choice.post_id ORDER BY id DESC", { type: QueryTypes.SELECT });
    return result;  
}

async function deleteEditorChoice(id)
{
    const result = await db.query("DELETE FROM editors_choice WHERE post_id = ?", { type: QueryTypes.DELETE, replacements: [id] });
    return result;
}

async function addEditorChoice(id)
{
    const result = await db.query("INSERT INTO editors_choice (post_id) VALUES (?)", { type: QueryTypes.INSERT, replacements: [id] });
    return result;
}

async function getAllPages()
{
    const result = await db.query("SELECT * FROM pages ORDER BY id DESC", { type: QueryTypes.SELECT });
    return result;
}

async function createPage(title, content, header_image, status, premalink)
{
    const result = await db.query("INSERT INTO pages (title, content, status, premalink, image) VALUES (?, ?, ?, ?, ?)", { type: QueryTypes.INSERT, replacements: [title, content, status, premalink, header_image] });
    return result;
}

async function deletePage(id)
{
    const result = await db.query("DELETE FROM `pages` WHERE id = ?", { type: QueryTypes.DELETE, replacements: [id] });
    return result;
}

async function getPageById(id)
{
    let isnum = /^\d+$/.test(id);
    if (isnum)
    {
        const result = await db.query("SELECT * FROM pages WHERE id = ? ORDER BY id DESC", { type: QueryTypes.SELECT, replacements: [id] });
        return result;
    }

    return [];
}

async function updatePage(id, title, content, header_image, status, premalink)
{
    const result = await db.query("UPDATE pages SET title = ?, content = ?, image = ?, status = ?, premalink = ? WHERE id = ?;", { type: QueryTypes.UPDATE, replacements: [title, content, header_image, status, premalink, id] });
    return result;
}

async function getAmountPosts()
{
    const result = await db.query("SELECT COUNT(*) FROM Articals;", { type: QueryTypes.UPDATE });
    return result;
}

module.exports = {
    getAllPosts,
    getPostById,
    updatePost,
    updatePostWithoutImage,
    createPost,
    deletePost,
    getEditorChoice,
    deleteEditorChoice,
    addEditorChoice,
    getAllPages,
    createPage,
    deletePage,
    getPageById,
    updatePage,
    getAmountPosts
};
