var exports = module.exports = {
    arrayConcat : (arr, ...args) => [].concat(arr, ...args),
    arrayDifference : (a, b) => { const s = new Set(b); return a.filter(x => !s.has(x)); },
    arrayIncludes : (collection, val, fromIndex=0) => collection.slice(fromIndex).indexOf(val) != -1,
    arrayIntersection : (a, b) => { const s = new Set(b); return a.filter(x => s.has(x)); },
    arrayRemove : (arr, func) => Array.isArray(arr) ? arr.filter(func).reduce((acc, val) => { arr.splice(arr.indexOf(val), 1); return acc.concat(val); }, []) : [],
    arrayUnion : (a, b) => Array.from(new Set([...a, ...b])),
    arrayWithout : (arr, ...args) => arr.filter(v => args.indexOf(v) === -1),
    arrayMax : arr => Math.max(...arr),
    arrayMin : arr => Math.min(...arr),
    arrayGroupBy : (arr, func) => arr.map(typeof func === 'function' ? func : val => val[func]).reduce((acc, val, i) => { acc[val] = (acc[val] || []).concat(arr[i]); return acc; }, {}),
    arrayShuffle : arr => arr.sort(() => Math.random() - 0.5)
};