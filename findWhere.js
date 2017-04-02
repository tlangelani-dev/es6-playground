function findWhere(array, criteria) {
    return array.find(function(arr) {
        return arr.height === criteria.height;
    });
}

var ladders = [
    { id: 1, height: 20 },
    { id: 3, height: 25 }
];

console.log( findWhere(ladders, { height: 25 }) );