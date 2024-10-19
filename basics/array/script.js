 /*
 Arrays are generally described as "list-like objects";
 they are basically single objects that contain multiple
  values stored in a list
 */

  const array = [1, 'boy', [2, 3, 4],];

  //Array Length

  /*
  Similar to string length, 
  we find array length by using the
  length() method */

  array.length();

  //Accessing and modifying array items

/*
items in an array are numbered from 0,
these nembers are called item index,
you can access individual items using square
brackets and the item index 
*/

const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
console.log(shopping[0]);
// returns "bread"

/*
you can also modify individual items in an array
by, giving a single array item a new value
*/

shopping[0] = "tahini";
console.log(shopping);
// shopping will now return [ "tahini", "milk", "cheese", "hummus", "noodles" ]


                                        /*Note: We've said it before, but just as a reminder — JavaScript starts indexing arrays at zero! */

/*
an array inside an array is called a multidimensional
array. you can access the inner array items by 
chaining two sets of square barackets together
*/

const random = ["tree", 795, [0, 1, 2]];
random[2][2];

//Finding index of an array item

/*
you can find this by using indexOf() method and
passing the item as the argument,
it will either return the index of the item,
or -1 if the item is not found 
*/

const birds = ["Parrot", "Falcon", "Owl"];
console.log(birds.indexOf("Owl")); //  2
console.log(birds.indexOf("Rabbit")); // -1

//Adding items to an array

/*
we can add one or more items to the end 
of an array using push() method 
*/

const cities = ["Manchester", "Liverpool"];
cities.push("Cardiff");
console.log(cities); // [ "Manchester", "Liverpool", "Cardiff" ]
cities.push("Bradford", "Brighton");
console.log(cities); // [ "Manchester", "Liverpool", "Cardiff", "Bradford", "Brighton" ]

/*
to add an item to the beginning of an
array we use unShift() method
 */

cities.unshift("Edinburgh");
console.log(cities); // [ "Edinburgh", "Manchester", "Liverpool" ]

//Removing items

/*
we can remove items for the end of
an array using the pop() method
 */

cities.pop();
console.log(cities); // [ "Manchester" ]

/*pop() can store the removed item in a variable */

const removedCity = cities.pop();
console.log(removedCity); // "Liverpool"

/*
to remove the first item from the array
 we use shift() method 
 */

 cities.shift();
console.log(cities); // [ "Liverpool" ]

/*
if you know the index of the item 
you can remove it using splice()
 */

const index = cities.indexOf("Liverpool");
if (index !== -1) {
  cities.splice(index, 1);
}
console.log(cities);

/*
in splice() the first argument tells
where to start removing from, while
the second tells how many to be removed
*/

//Accessing all the items of an array

/*
the for...of statement is used to access
all the items in an array
 */

const birds2 = ["Parrot", "Falcon", "Owl"];

for (const bird of birds2) {
  console.log(bird);
}
