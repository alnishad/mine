var request = require("supertest");
var app = require("../index.js");describe("GET /", function() {
 it("SNE MAKES ME CRY AGAIN!!! ON ADN ON!!!", function(done) { //navigate to root and check the the response is "SNE MAKES ME CRY!!!"
 request(app).get("/").expect("SNE MAKES ME CRY", done);
 });
});
