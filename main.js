const firebaseConfig = {
    apiKey: "AIzaSyBDqAaFFmWAkdnNNtqPFFVGV0humT-2t7g",
    authDomain: "kwitter-a17e2.firebaseapp.com",
    databaseURL: "https://kwitter-a17e2-default-rtdb.firebaseio.com",
    projectId: "kwitter-a17e2",
    storageBucket: "kwitter-a17e2.appspot.com",
    messagingSenderId: "900063449345",
    appId: "1:900063449345:web:7ecd659ec4bbcebe518b00"
  };

  firebase.initializeApp(firebaseConfig);

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();

function adduser()
{
user_name = document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
  use : "playing"
});

}

//ADD YOUR FIREBASE LINKS