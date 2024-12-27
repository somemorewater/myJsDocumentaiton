//Basic if...else syntax

if (condition) {
    //code to run
} else {
    //code to run instead
}

//A real example

let shoppingDone = false;
let childsAllowance;

if (shoppingDone === true) {
  childsAllowance = 10;
} else {
  childsAllowance = 5;
}

/*
we use else if to add extra  
posibilities
 */

if (shoppingDone === true) {
  childsAllowance = 10;
} else if (childsAllowance >= childsAllowance) {
  childsAllowance = 1;
} else {
  childsAllowance = 5;
}


//We can also use switch

switch (expression) {
  case choice1:
    // run this code
    break;

  case choice2:
    // run this code instead
    break;

  // include as many cases as you like

  default:
    // actually, just run this code
    break;
}


//Ternary operator

/*
This is a short of an if...else 
statement, that does basically 
the same thing 
*/

//condition ? run code : run  code instead


