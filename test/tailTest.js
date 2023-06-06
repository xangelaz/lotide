const tail = require('../tail');
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns [6, 7] for [5, 6, 7]", () => {
    assert.deepEqual(tail([5, 6, 7]), [6, 7]);
  });
  it("returns [] for [3]", () => {
    assert.deepEqual(tail([3]), []); 
  });
});