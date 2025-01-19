//Welcome to Array Sorts methods


//First .sort()

/*
this method sorts elements in an array alphabetically
*/

const fruits = ['banana', 'orange', 'apple', 'mango'];

console.log(fruits.sort());

// .reverse() method

/*
this reverses the array, 
isn't it obvious
*/

const moreFruits = ['banana', 'orange', 'apple', 'mango'];

console.log(moreFruits.reverse());

/* 
by combining .sort() and .reverse()
you can sort arrays in descending order
*/

//.toSorted() method

/*
this method is a safe way to
sort arrays without changing the original array.
Other than .sort(), this creates a new array
for the sorted
*/

const months = ['Jan', 'Feb', 'Mar', 'Apr'];
const sorted = months.toSorted();

console.log(sorted);

// .toReversed()

/*
Just like .sort() and .toSorted()
this creates a new array to with
the reverse values
*/
const moreMonths = ['Jan', 'Feb', 'Mar', 'Apr'];
const reversed = moreMonths.toReversed();

console.log(reversed);

/*NOTE: .sort() treats everything as strings.
So if we use it on numbers 100 will come before
25 because 1comes before 2.
Hence we ca fix this with the 'Compare function'
*/

//Compare Function

const points = [40, 100, 1, 5, 25, 10];
console.log(
    points.sort(function(a, b){return a - b})
)

//you can still do the reverse stuff after that

//Sorting an array in random order

/*
you can use it to sort arrays in random order
*/

const morePoints = [40, 100, 1, 5, 25, 10];
console.log(
    morePoints.sort(function(){return 0.5 - Math.random()})
)


// The Fisher Yates method

/*
--You wouldn't believe it when I tell
    you that that is not the best way to 
    sort numeric arrays randomlly, cause
    it is not accurate.
The best is fisher yates shuffle
*/

const marks = [40, 100, 1, 5, 25, 10];

for (let i = marks.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let k = marks[i];
    marks[i] = marks[j];
    marks[j] = k;
}
 
console.log(marks);