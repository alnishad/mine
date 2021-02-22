var request = require("supertest");
var app = require("../index.js");describe("GET /", function() {
 it("respond with SNE MAKES ME CRY AGAIN!!!", function(done) { //navigate to root and check the the response is "SNE MAKES ME CRY!!!"
 request(app).get("/").expect("SNE MAKES ME CRY AGAIN!!!", done);
 });
});
