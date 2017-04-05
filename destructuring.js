'use strict';
/**
 * ES6 Destructuring.
 * NB: Requires Node 6+
 */
const points = [
    [4, 5],
    [10, 1],
    [0, 40]
];

let data = points.map(([x, y]) => {
    return { x, y };
});

// console.log(data);

/**
 * Example 2
 */
const profile = {
    title: 'Engineer',
    department: 'Engineering'
};
function isEngineer({title, department}) {
    return title === 'Engineer' && department === 'Engineering';
}
// console.log( isEngineer(profile) );

/**
 * Example 3
 */
const classes = [
  [ 'Chemistry', '9AM', 'Mr. Darnick' ],
  [ 'Physics', '10:15AM', 'Mrs. Lithun'],
  [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
];
const classesAsObject = classes.map(([subject, time, teacher]) => {
    return {subject, time, teacher};
});
// console.log(classesAsObject);

/**
 * Example 4
 */
const numbers = [1, 2, 3];

function double(...numbers) {

}