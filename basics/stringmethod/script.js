//Check if a string contain a substring

/* 
To do so js uses the includes() method,
with the required substring as the parameter
*/

const browserType = "mozilla";

if (browserType.includes("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}

//Check if a string starts or ends with a particular substring

/*
Js basically uses the startsWith() and endsWith() methods,
then the string as the parameter
*/

//startsWith()

if (browserType.startsWith("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}

//endsWith

if (browserType.endsWith("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}

//Finding the position of a substring in a string

/*
You can check the position of a substring in a string using
the indexOf() method
*/

/*The first occurance of the substring is the output,
if the substring is not found it returns -1 */
const tagline = "MDN - Resources for developers, by developers";
console.log(tagline.indexOf("developers")); // 20

/*When you find the firts occurance you can check for subsequent occurances,
by passing a value greater that the index of the first occurancd 
*/

const firstOccurrence = tagline.indexOf("developers");
const secondOccurrence = tagline.indexOf("developers", firstOccurrence + 1);

console.log(firstOccurrence); // 20
console.log(secondOccurrence); // 35

//Extracting a substring from a string

/*you can extract a substring from a string using the slice() method,
the two parameters will be the starting position and the end position
 */

console.log(browserType.slice(1, 4)); // "ozi"

//Changing case

/*
You can change the case of a string using the,
toUpperCase() or toLowerCase() method 
*/

const radData = "My NaMe Is MuD";
console.log(radData.toLowerCase());
console.log(radData.toUpperCase());


//Updating part of a string

/*
you can replace parts of a string using,
the replace() method.
the two parameters are the string to find and the string to replace 
*/

const updated = browserType.replace("moz", "van");

console.log(updated); // "vanilla"
console.log(browserType); // "mozilla"

//this method makes do effect on the string but creates a new string

browserType = browserType.replace("moz", "van");

console.log(browserType); // "vanilla"

//and it only change the first occurance