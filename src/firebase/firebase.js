// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { database } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import * as firebase from "firebase";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const analytics = firebase.getAnalytics(app);

const database = firebase.database();

export {firebase, database as default};

// database.ref("expenses").on("child_removed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
// database.ref("expenses").on("child_changed", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });
// database.ref("expenses").on("child_added", (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });


// database.ref('expenses'). once('value').then((snapshot) => {
//   const expenses = [];
//   snapshot.forEach((expense) => {
//     expenses.push({
//       id:expense.key,
//       ...expense.val()
//     })
//   });
//   console.log(expenses);
// });

// database.ref('expenses').on('value' , (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((expense) => {
//       expenses.push({
//         id:expense.key,
//         ...expense.val()
//       })
//     });
//     console.log(expenses);
// });

// database.ref('expenses').push(
//   {
//     description: 'Cuenta Agua',
//     note: 'Junio pagada',
//     amount: 3000,
//     createdAt: 0
//   }
// );
// database.ref('expenses').push(
//   {
//     description: 'Cuota Auto',
//     note: 'Junio pagada van 5',
//     amount: 220000,
//     createdAt: 0
//   }
// );
// database.ref('expenses').push(
//   {
//     description: 'Internet Casa',
//     note: 'Junio pagada',
//     amount: 17990,
//     createdAt: 0
//   }
// );

// database.ref('notes').push({
//   title: 'Course topics',
//   body: 'React Native, Angular, Python'
// });

// database.ref('notes').set(notes);

// database.ref().on('value', (snapshot) => {
//   const val = snapshot.val();
//   console.log(val);
//   console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
// });

// const onValueChange = database.ref().on("value", (snapshot) => {
//   console.log(snapshot.val());
//   console.log(``)
// }, (e) => {
//   console.log('error fteching data' , e);
// });

// database.ref().once('value').then((snapshot) => {
//   const val = snapshot.val();
//   console.log(val);
// }).catch((e) => {
//   console.log('could not red data: ', e);
// });

// database
//   .ref()
//   .set({
//     name: "Nelson Izquierdo",
//     age: 38,
//     isSingle: true,
//     job: {
//       title: 'Software Developer',
//       company: 'google'
//     },
//     stressLevel: 6,
//     location: {
//       city: "Santiago",
//       country: "Chile",
//     },
//   })
//   .then(() => {
//     console.log("todo ok");
//   })
//   .catch((e) => {
//     console.log("todo mal, e: ", e);
//   });

// database.ref().set('This is my data.');
// database.ref('age').set(45);

// database.ref('location/city').set('La Serena');

// database
//   .ref("atributes")
//   .set({
//     heigth: 176,
//     weight: 66,
//   })
//   .then(() => {⁄
//     console.log("adding data sucessfull");
//   })
//   .catch((e) => {
//     console.log("⁄adding height an weight error: ", e);
//   });

// console.log('i made a request to change the data')
// database
//   .ref("isSingle")
//   .remove()
//   .then(() => {
//     console.log("is Single removed");
//   })
//   .catch((e) => {
//     console.log("Could not remove: ", e);
//   });

// update db
// database.ref().update({
//   stressLevel: 9,
//   'job/company': 'Amazon',
//   'location/city': 'Seattle'
// });

// setTimeout(() => {
//   database.ref("age").set(38);
// }, 3500);
// setTimeout(() => {
//   database.ref().off(onValueChange);
// }, 7000);
// setTimeout(() => {
//   database.ref("age").set(58);
//   console.log("try to change");
// }, 10500);
