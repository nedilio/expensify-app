console.log('destructuring');
// Object
// const person = {
//   name: 'Nelson',
//   age: 38,
//   location: {
//     city: 'Santiago',
//     temp: 14
//   }
// };

// // const name = person.name;
// // const age = person.age;
// const {name = 'Anonymous', age} = person;
// console.log(`${name} is ${age}`);

// const {city, temp: temperature} = person.location
// if (city && temperature) {
//   console.log(`its ${temperature} in ${city}`);

// }


// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher;

// console.log(publisherName);

// Array destructuring
const address = ['Jose Manuel infante 1615' , 'Providencia', 'santiago de chile', '75000000'];

const [, comuna, ciudad = 'Caracas'] = address;

console.log(`You are in ${comuna}, ${ciudad}.`);

const item = ['Coffee (hot)', '$2000','$2500','$2750'];

const [product, ,price] = item;
console.log(`A medium ${product} costs ${price}`);