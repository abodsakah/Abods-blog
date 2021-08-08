const request = require("supertest");
const blog = require("../index");
const admin = require("../adminPanelNew/index");

describe("Send a 'GET /test' to the blog to see if the server is up", () => {
    it("respond with Working", (done) => {
    request(blog).get("/test").expect("Working", done);
    })
});

describe("Send a 'GET /test' to the admin panel to see if the server is up", () => {
    it("respond with Working", (done) => {
    request(admin).get("/test").expect("Working!", done);
    })
});
