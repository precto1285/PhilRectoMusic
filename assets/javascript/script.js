// Initialize Firebase
var config = {
  apiKey: "AIzaSyDI90cbRL6b3ChjxbYFfd7Gq3gVqV74IvM",
  authDomain: "philmusic-63c12.firebaseapp.com",
  databaseURL: "https://philmusic-63c12.firebaseio.com",
  projectId: "philmusic-63c12",
  storageBucket: "",
  messagingSenderId: "694275992182"
};
firebase.initializeApp(config);

//Add to database
var database = firebase.database();

//reference storage
var storage = firebase.storage();

var storageRef = storage.ref();

var imagesRef = storageRef.child('images');

var mp3Ref = storageRef.child('mp3s');





