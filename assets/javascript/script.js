// Initialize Firebase
var config = {
  apiKey: "AIzaSyDI90cbRL6b3ChjxbYFfd7Gq3gVqV74IvM",
  authDomain: "philmusic-63c12.firebaseapp.com",
  databaseURL: "https://philmusic-63c12.firebaseio.com",
  projectId: "philmusic-63c12",
  storageBucket: "gs://philmusic-63c12.appspot.com/",
  messagingSenderId: "694275992182"
};
firebase.initializeApp(config);

//Add to database
var database = firebase.database();
var storage = firebase.storage();
//reference storage
var acousticRef = storageRef.child('images/acoustic.jpg');

//main info buttons
$('#what').on("click", function () {
  console.log("yesA");
  acousticRef.getMetadata().then(function(metadata) {
    $('#photo').html(acousticRef);
  }).catch(function(error){

  });
});
$('#where').on("click", function () {
  console.log("yesB");
  $("#musicPlay").html(mp3Ref);
  $("#history").html("Hello World");
});
//sidebar music buttons
$('#bHead').on("click", function () {
  console.log("yes0");
  $("#musicInfo").html("Bonehead");
});
$('#tVah').on("click", function () {
  console.log("yes1");
  $("#musicInfo").html("Taravah");
});
$('#scTmachine').on("click", function () {
  console.log("yes2");
  $("#musicInfo").html("Space Craft Time Machine");
});
$('#aSessions').on("click", function () {
  console.log("yes3");
  $("#musicInfo").html("The After Sessions");
});
$('#sPhome').on("click", function () {
  console.log("yes4");
  $("#musicInfo").html("Styrophome");
});
$('#pheel').on("click", function () {
  console.log("yes5");
  $("#musicInfo").html("Pheel");
});
$('#ymr').on("click", function () {
  console.log("yes6");
  $("#musicInfo").html("YMR");
});
$('#pHome').on("click", function () {
  console.log("yes7");
  $("#musicInfo").html("Home Recordings");
});





