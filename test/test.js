var chai = require("chai"),
  expect = chai.expect,
  Stack = require("../index"),
  stack;

describe("Stack", function () {
    beforeEach(function () {
        stack = new Stack();
    });

  describe("#push() / #pop()", function () {
    it("should pop pushed items in the correct order", function () {
      stack.push("1st");
      stack.push("2nd");
      stack.push("3rd");

      expect(stack.pop()).to.equal("3rd");
      expect(stack.pop()).to.equal("2nd");
      expect(stack.pop()).to.equal("1st");
    });
  });

  describe("#size", function () {
        it("should return 0 when empty", function () {
            expect(stack.size()).to.equal(0);
        });

        it("should return 0 after popping more than item on the stack", function () {
            stack.push(1);
            stack.pop();
            stack.pop();
            stack.pop();

            expect(stack.size()).to.equal(0);
        });

        it("should return correct number of items on the stack", function () {
            stack.push(1);
            stack.push(2);
            stack.push(3);

            expect(stack.size()).to.equal(3);
        });
    });
});
