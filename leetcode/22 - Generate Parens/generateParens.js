var generateParenthesis = function(n) {
  const res = [];
  (function recurse(str, open, closed) {
    if (closed === n) return res.push(str);
    if (open + closed <= n) {
      recurse(str + '(', open + 1, closed);
      if (open > 0) recurse(str + ')', open - 1, closed + 1);
    }
  })('', 0, 0);
  return res;
};

const output = generateParenthesis(10);
console.log(output);
