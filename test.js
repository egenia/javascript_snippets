var arrays = require("./arrays.js");

console.log(arrays.arrayConcat([1], [1, 2, 3, [4]], ["test"]))
console.log(arrays.arrayDifference([1,2,3], [1,2]))
console.log(arrays.arrayIncludes("rouge vert jaune", "jaune"))
console.log(arrays.arrayIntersection([1,2,3], [4,3,2]))
console.log(arrays.arrayRemove([1, 2, 3, 4], n => n % 2 == 0))
console.log(arrays.arrayUnion([1,2,3], [4,3,2]))
console.log(arrays.arrayWithout([2, 1, 2, 3], 1, 2))
console.log(arrays.arrayMax([10, 1, 5]))
console.log(arrays.arrayMin([10, 1, 5]))
console.log(arrays.arrayGroupBy([6.1, 4.2, 6.3], Math.floor))
console.log(arrays.arrayGroupBy(['un', 'deux', 'trois', 'quatre', 'cinq'], 'length'))
console.log(arrays.arrayShuffle([1,2,3])) 