//indexOf()

/*
indexOf() searches of an element
in an array and return it's position
*/

const arr = [1, 2, 3, 4];

let position = arr.indexOf(3);

console.log(position);

/*
syntax: array.indexOf(item, start)

item: the required stuff
start: where to start the search

if it is not found it returns -1
*/

//.lastIndexOf()

/*
this returns the position of the last
occurrence of the element
*/

const arr1 = ['apple', 'mango', 'orange', 'apple', 'lemon'];
let position2 = arr1.lastIndexOf('apple');

console.log(position2);

/*
it has the same syntax as 
.indexOf()
*/

//.includes()

/*
this checks if an element is present in an array
*/

const fruits = ['banana', 'apple', 'orange', 'mango'];
let check = fruits.includes('apple');

console.log(check);

/*
the syntax is just the item to search for
as the argument
*/

//.find()

/*
This returns the first element in 
an array to satisfy a certain condition
*/

const numbers = [4, 6, 8, 9, 17, 23];
let first = numbers.find(greater);

function greater(value, index) {
    return value > 18
}

console.log(first);


// .firstIndex()

/*
This returns the index of the 
first element to pass the test funcion
*/

const num = [3, 7, 12, 18 ,26];
let inFirst = num.findIndex(great);

function great(value, index) {
    return value > 18;
}

console.log(inFirst);

//.findLast()

/*
This starts frrom the end to 
return the first element to meet the condition
*/

const temp = [24, 32, 37, 54];
let highTemp = temp.findLast(high);

function high(value, index) {
    return value > 40;
}

console.log(highTemp);

// .findLastIndex()

/*
This find the index of the last
element to satisfy a condition
*/

const $temp = [24, 32, 37, 54];
let $highTemp = temp.findLastIndex(high);

function high(value, index) {
    return value > 40;
}

console.log($highTemp);