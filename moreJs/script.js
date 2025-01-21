const contacts = {
  addressBook: [
    { name: "Michael Olmo", email: "michaelolmo@gmail.com" },
    { name: "Jordan Philip", email: "jordanphilip@gmail.com" },
    { name: "Grace Finn", email: "gracefinn@gmail.com" },
    { name: "Paul Seed", email: "paulseed@gmail.com" },
    { name: "John Doe", email: "johndoe@gmail.com" },
  ],
};

const object = contacts.addressBook,
  contactsCount = object.length;

for (let i = 0; i < contactsCount; i++) {
  console.log(object[i]);
}

console.log(object)
