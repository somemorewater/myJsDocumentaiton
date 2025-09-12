


// function walkDog() {

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const dogWalked = true;

//             if (dogWalked) {
//                 resolve("You walked the dog");
//             } else {
//                 reject("You didn't walk the dog");
//             }
//         }, 1500);
//     })
// }

// function cleanKitchen() {

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const kitchenCleaned = true;

//         if (kitchenCleaned) {
//             resolve("You cleaned the kitchen");
//         } else {
//             reject("You didn't clean the kitchen");
//         }
//     }, 2500);
//   })
// }

// function takeOutTrash() {

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const trashTakenOut = true;

//         if (trashTakenOut) {
//             resolve("You took out the trash");
//         } else {
//             reject("You didn't take out the trash");
//         }
//     }, 500);
//   })
// }

// walkDog().then(value => {console.log(value); return cleanKitchen()})
//          .then(value => {console.log(value); return takeOutTrash()})
//          .then(value => {console.log(value); console.log(`You've finished all the chours`)})
//          .catch(error => console.error(error));


const userName = 'somemorewater';
const $name = 'Water';
const role = 'admin';


function search() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Searching database for user...')
        }, 1000)
    })
}

function getUserName() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (userName) {
                resolve(`Username: ${userName}`);
            } else {
                reject('User not found');
            }
        }, 1000)
    })
}

function getName() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if ($name) {
        resolve(`Name: ${$name}`);
      } else {
        reject("User is anonymous");
      }
    }, 1000);
  });
}

function getRole() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (role) {
        resolve(`Role: ${role}`);
      } else {
        reject("User role not found");
      }
    }, 1000);
  });
}

search().then(value => {console.log(value); return getUserName()})
        .then(value => {console.log(value); return getName()})
        .then(value => {console.log(value); return getRole()})
        .then(value => {console.log(value); console.log('You Have Gotted All User Details')})
        .catch(error => console.error(error));