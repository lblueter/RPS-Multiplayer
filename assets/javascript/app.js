var wins = 0
var losses = 0
var youPicked
var theyPicked

// var rock = $("#rock").attr("data-type")
// console.log(rock)
var config = {
    apiKey: "AIzaSyDxG4kssZmJXr200W7pU0NOeVdiARpO620",
    authDomain: "jaguars-21321.firebaseapp.com",
    databaseURL: "https://jaguars-21321.firebaseio.com",
    projectId: "jaguars-21321",
    storageBucket: "jaguars-21321.appspot.com",
    messagingSenderId: "1052929969797"
};

firebase.initializeApp(config);

var database = firebase.database();

$(document).on("click", "#choice", function () {
    youPicked = $(this).attr("data-type")
    console.log(youPicked)
})