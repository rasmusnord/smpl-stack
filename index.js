"use strict";

var Stack = function (data) {
  this.data = Array.isArray(data) ? data : [];
};

Stack.prototype.push = function (item) {
  if (!item) {
    throw new Error("No item");
  }

  this.data.push(item);
};

Stack.prototype.pop = function () {
  return this.data.pop();
};

Stack.prototype.size = function () {
  return this.data.length;
};

module.exports = Stack;
