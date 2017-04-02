/**
 * Example 1
 */
var colors = [
    { color: 'red' },
    { color: 'blue' },
    { color: 'yellow' },
];

var data = colors.reduce(function(result, color) {
    result.push(color.color);
    return result;
}, []);

// console.log( data );

/**
 * Example 2: Balance parentheses
 */
function balanced(value) {
    return !value.split('').reduce(function(result, char) {
        if (result < 0) { return result; }
        if (char === '(') { return ++result; }
        if (char === ')') { return --result; }
        return result;
    }, 0);
}

// console.log( balanced('((()))') );

/**
 * Example 3
 */
var desks = [
  { type: 'sitting' },
  { type: 'standing' },
  { type: 'sitting' },
  { type: 'sitting' },
  { type: 'standing' }
];

var deskTypes = desks.reduce(function(result, desk) {
    if ( desk.type === 'sitting' ) {++result.sitting;}
    if ( desk.type === 'standing' ) {++result.standing;}
    return result;
}, { sitting: 0, standing: 0 });

console.log(deskTypes);