const bertArray = require('./bert_array.js');


console.log(JSON.stringify(bertArray.encodeArray([])))
console.log(JSON.stringify(bertArray.encodeArray([1,2,3])))
console.log(JSON.stringify(bertArray.encodeArray([false,2,3])))
console.log(JSON.stringify(bertArray.encodeArray([1,2,[3,4]])))
console.log(JSON.stringify(bertArray.encodeArray([false,0,0,[]])))
console.log(JSON.stringify(bertArray.encodeArray([false,0,0,[1]])))