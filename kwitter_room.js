
var firebaseConfig = {
  apiKey: "AIzaSyCHfbwj6exCSKh32AwBcv0v6xOyjlauyvw",
  authDomain: "lets-chat-app-f5886.firebaseapp.com",
  projectId: "lets-chat-app-f5886",
  storageBucket: "lets-chat-app-f5886.appspot.com",
  messagingSenderId: "866469354199",
  appId: "1:866469354199:web:f83a93f11e3ffd330f6e92"
};

// Initialize Firebase
firebase. initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
  Room_names = childKey;
    
    });});}
getData();