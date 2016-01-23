var chai = require("chai"),
  expect = chai.expect,
  Stack = require("../index");

describe("Stack", function () {
  describe("#push() / #pop()", function () {
    it("should pop pushed items in the correct order", function () {
      var stack = new Stack();

      stack.push("1st");
      stack.push("2nd");
      stack.push("3rd");

      expect(stack.pop()).to.equal("3rd");
      expect(stack.pop()).to.equal("2nd");
      expect(stack.pop()).to.equal("1st");
    });
  });
});
