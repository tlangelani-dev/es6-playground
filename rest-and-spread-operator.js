/**
 * Rest operator.
 */
function addNumbers(...numbers) {
    return numbers.reduce((sum, number) => {
        return sum + number;
    }, 0);
}
console.log( addNumbers(10, 20, 30) );

/**
 * Spread opeartor.
 */
const cars1 = ['VW', 'AUDI', 'BMW'];
const cars2 = ['TOYOTA', 'FORD'];
let all = [ ...cars1, ...cars2];
console.log( all );