/* a code structure that allows you to do something very similar many times without repeating the same code for each iteration. */

// The for...of loop

//This is the basic tool forlooping through a collection

const cats = ["Loepard", "Serval", "Jaguar", "Tiger", "Caracal", "Lion"];

for (const cat of cats) {
    console.log(cat);
}


//you can use map() to do something to each item in a collection and create a new collection containing the changed items

function toUpper(string) {
  return string.toUpperCase();
}


const upperCats = cats.map(toUpper);

console.log(upperCats);


// you can use filter() to test each item in a collection, and create a new collection contaning only items that match

function lCat(cat) {
  return cat.startsWith("L");
}

const filtered = cats.filter(lCat);

console.log(filtered);

//The standard for loop

/* for (initializer; conition; final-expression) {
    //code to run
} */

for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]);  
}