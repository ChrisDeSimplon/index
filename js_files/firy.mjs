import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
  apiKey: "AIzaSyAao2NOXFU049xaoTm6qM-cjzocs3c-cQE",

authDomain: "notebooster-658b3.firebaseapp.com",

projectId: "notebooster-658b3",

storageBucket: "notebooster-658b3.appspot.com",

messagingSenderId: "276683582917",

appId: "1:276683582917:web:7c3cfbdb97062602766fac",

measurementId: "G-52ZQG44H3Y"

  //...

};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'Students');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  
  return cityList;
};
const x= getCities(db);

console.log(x);