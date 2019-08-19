//Require the dev-dependencies
let chai = require("chai");
let chaiHttp = require("chai-http");
let server = "https://wordhound.niweera.gq";
let should = chai.should();

chai.use(chaiHttp);
//Our parent block
describe("WordHound/words/find", () => {
  beforeEach(done => setTimeout(done, 180000));
  /*
   * Test the /GET route
   */

  describe("/GET hello", () => {
    it("it should GET the definition of hello", done => {
      chai
        .request(server)
        .get("/words/find/hello")
        .end((err, res) => {
          res.should.have.status(200);
          res.should.be.json;
          res.body.should.be.a("object");
          res.body.should.have.property("word");
          res.body.word.should.be.a("string");
          res.body.word.should.equal("hello");
          res.body.should.have.property("definition");
          res.body.definition.should.be.a("string");
          res.body.definition.should.equal(
            "Used as a greeting or to begin a telephone conversation."
          );
          done();
        });
    });
  });
});
