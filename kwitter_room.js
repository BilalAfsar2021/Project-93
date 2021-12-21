
var firebaseConfig = {
      apiKey: "AIzaSyBZX2UpdDkgOl5cIq5EjWLFxg9rBmNVL7A",
      authDomain: "kwitter-85135.firebaseapp.com",
      databaseURL: "https://kwitter-85135-default-rtdb.firebaseio.com",
      projectId: "kwitter-85135",
      storageBucket: "kwitter-85135.appspot.com",
      messagingSenderId: "268021751018",
      appId: "1:268021751018:web:c2ad2f175e3ca78f8ecb93"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("User_Name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
