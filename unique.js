// Another really hard one!  Write a function called 'unique' that will remove all the duplicate values from an array.

// For example, given the following array:
// var numbers = [1, 1, 2, 3, 4, 4];
// Your function should return
// [1, 2, 3, 4]
// Hint: Use the 'reduce' and 'find' helpers.

var numbers = [1, 1, 2, 3, 4, 4];

function unique(array) {
    return array.reduce(function(result, num) {
        var exist = result.find(function(number) {
            return number === num;
        });
        if (exist === undefined) {
            result.push(num);
        }
        return result;
    }, []);
}

console.log( unique( numbers ) );