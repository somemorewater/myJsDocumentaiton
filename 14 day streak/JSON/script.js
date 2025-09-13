const names = [
  "Raphinha",
  "Pedri",
  "Lamine",
  "Gavi",
  "Ferran Torres",
  "Lewandowski",
  "Koundé",
  "Frenkie",
  "Araújo",
  "Eric",
  "Balde",
  "Joan",
  "Olmo",
  "Cubasi",
  "Fermin",
];

const person = {
  name: "Messi",
  age: 38,
  club: "Inter Miami",
  position: "Forward",
  nationality: "Argentina",
  nicknames: ["La Pulga", "GOAT", "D10S"],
  isHeTheGOAT: true,
};

const people = [
  {
    name: "Raphinha",
    age: 26,
    club: "Barcelona",
    position: "Winger",
    nationality: "Brazil",
  },
  {
    name: "Pedri",
    age: 21,
    club: "Barcelona",
    position: "Midfielder",
    nationality: "Spain",
  },
  {
    name: "Lamine",
    age: 16,
    club: "Barcelona",
    position: "Forward",
    nationality: "Spain",
  },
];

const jsonString = JSON.stringify(people);
//JSON.stringify turns json objects to strings
//JSON.parse turns strings to json objects


fetch("person.json")
    .then(response => response.json())
    .then(value => console.log(value))