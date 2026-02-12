

// The for...of loop

//This is the basic tool for looping through a collection

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


//real example of a for loop
//calculating squares of numbers from 1-10

/*const results = document.querySelector("#results");

function calculate() {
  for (let i = 1; i < 10; i++) {
    const newResult = `${i} x ${i} = ${i * i}`;
    results.textContent += `${newResult}\n`;
  }
  results.textContent += "\nFinished!\n\n";
}

const calculateBtn = document.querySelector("#calculate");
const clearBtn = document.querySelector("#clear");

calculateBtn.addEventListener("click", calculate);
clearBtn.addEventListener("click", () => (results.textContent = ""));
*/



//using for loop to loop through a collection

for (let i = 0; i < cats.length; i++) {
  console.log(cats[i]);
}