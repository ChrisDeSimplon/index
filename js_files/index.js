var express = require("express");

var app = express();
// Premiers test firebase
 var firebase = require("firebase-admin");

var serviceAccount = require("./key.json");
const { initializeApp } = require('firebase/app');
const { getFirestore, collection, getDocs } = require('firebase/firestore');
firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: "https://notebooster-658b3.eur3.firebaseio.com"
}); 

var db = firebase.database(); 
console.log(db);



//import { getDatabase } from "firebase/database";
//const app = initializeApp(firebaseConfig);

// Fin premiere partie
//Deuxieme couche
/* import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {apiKey: "AIzaSyAao2NOXFU049xaoTm6qM-cjzocs3c-cQE",

authDomain: "notebooster-658b3.firebaseapp.com",

projectId: "notebooster-658b3",

storageBucket: "notebooster-658b3.appspot.com",

messagingSenderId: "276683582917",

appId: "1:276683582917:web:7c3cfbdb97062602766fac",

measurementId: "G-52ZQG44H3Y"

  //...
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); */


  // Fin firebase
// lignes rajoutées le 11 octobre
const fs = require('fs');

fs.appendFile('nouveauFichier.txt', 'Mon contenu', function (err) {   if (err) throw err;   console.log('Fichier créé !');});
fs.writeFile('nouveauFichier.txt', 'Mon nouveau contenu', function (err) {   if (err) throw err;   console.log('Fichier mis à jour !');});
// Lignes initiales pas toucher
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", "./views");

app.listen(3004);

app.get("/", function(request, response)  {
   
    response.render("homePage");
});

app.get("/test", function(request, response)  {
   
    response.render("testPage");
});
app.get("/geo", function(request, response)  {
   
    response.render("geo3d");
});
app.get("/ggbapp", function(request, response)  {
   
    response.render("apptesty");
});
app.get("/ggbapp2", function(request, response)  {
   
    response.render("ggbtest");
});
app.get("/13", function(request, response)  {
   
    response.render("13oct");
});

async function getCities(db) {
    const citiesCol = collection(db,'Students');
    const citySnapshot = await getDocs(citiesCol);
    const cityList = citySnapshot.docs.map(doc => doc.data());
    
    return cityList;
  };
  const x= getCities(db);
  
  console.log(x); 
// Import the functions you need from the SDKs you need


/* async function getData() {
    this.produits = []
    // RECUPERE TOUS LES DOCUMENTS D'UNE COLLECTION DE LA CATEGORIE RADIO
    this.$fire.firestore.collection('Students').get().then((querySnapshots) => {
      querySnapshots.forEach(doc => {
        this.produits.push(doc.data())
      });
      console.log(this.produits)
    })
  };
  getData(); */
