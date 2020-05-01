const LinkedList = require('./LinkedList.js');

const LLRange = (start, end, incr = 1) => {
  incr = Math.abs(incr);
  const LL = new LinkedList();
  if (start > 0 && !end) {
    for (let i = 0; i < start; i++) LL.append(i);
  } else if (start < end) {
    for (let i = start; i < end; i += incr) LL.append(i);
  } else if (start > end) {
    for (let i = start; i > end; i -= incr) LL.append(i);
  }
  return LL;
};

module.exports = LLRange;
