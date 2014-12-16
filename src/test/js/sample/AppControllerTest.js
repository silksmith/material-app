goog.require("sample.AppController");

var expect = chai.expect;
describe("sample.AppController", function(){

  describe("init", function(){
    it("should add todos array to scope", function(){
      var scope = sinon.stub();
      var ctrl = new sample.AppController(scope);
      expect(scope).to.have.property("todos").and.to.be.instanceof(Array)
    });
  })
});
