/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  let parentheses = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (const c of s) {
    if (parentheses.hasOwnProperty(c)) {
      stack.push(parentheses[c]);
    } else {
      if (stack.length === 0 || stack.pop() !== c) {
        return false;
      }
    }
  }

  return stack.length == 0;
};

test(" to equal", () => {
  expect(isValid("()")).toBe(true);
});

test(" to equal", () => {
  expect(isValid("()[]{}")).toBe(true);
});

test(" to equal", () => {
  expect(isValid("(]")).toBe(false);
});
