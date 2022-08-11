//importing the functions we need for the SDK's 

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";

import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-analytics.js";

const firebaseConfig = {

    apiKey: "AIzaSyCczwPZD-GvtPvH_Ovbuyf-zYPAkl_oeKo",

    authDomain: "trial-cdc88.firebaseapp.com",

    databaseURL: "https://trial-cdc88-default-rtdb.asia-southeast1.firebasedatabase.app",

    projectId: "trial-cdc88",

    storageBucket: "trial-cdc88.appspot.com",

    messagingSenderId: "200705815206",

    appId: "1:200705815206:web:aa2e487e2a31272c4d7a67",

    measurementId: "G-KTCD470VEK"

  };

   //initalize firebase
  const app = firebase.initializeApp(firebaseConfig);

  //reference your dataase
  var ticketsDB = firebase.database().ref('tickets')

  document.getElementById('tickets').addEventListener("Book Now", submitForm)

  function submitForm(e){
    e.preventDefault();

    var name = getElementVal('name');
    var phoneno = getElementVal('phonenumber');
    var email = getElementVal('email');
    var noTickets = getElementVal('noTickets');
    var date = getElementVal('date');

    console.log(name, phoneno, email, noTickets, date)
  } 
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  }