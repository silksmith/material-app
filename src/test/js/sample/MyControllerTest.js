goog.require("sample.MyController");

var expect = chai.expect;
describe("sample.MyController", function(){

  describe("init", function(){
    it("should set message property 'Hello World!' to scope", function(){
      var scope = sinon.stub()
      var myCtrl = new sample.MyController(scope);
      expect(scope).to.have.property("message").and.to.equal("Hello World!")
    });
  })
});
