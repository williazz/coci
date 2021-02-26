const _ = require('lodash');
const sortedArrayToBST = require('./sortedArrayToBST');
console.log(JSON.stringify(sortedArrayToBST(_.range(10)), null, 2));
