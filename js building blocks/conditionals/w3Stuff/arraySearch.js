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

//
