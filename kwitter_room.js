const firebaseConfig = {
      apiKey: "AIzaSyAhKhOrJdz5uqxH2ZGkjTAfHeHp5gsgN7w",
      authDomain: "kwitter-ab27e.firebaseapp.com",
      databaseURL: "https://kwitter-ab27e-default-rtdb.firebaseio.com",
      projectId: "kwitter-ab27e",
      storageBucket: "kwitter-ab27e.appspot.com",
      messagingSenderId: "808107038835",
      appId: "1:808107038835:web:44d4cc35a8931d73db3206"
    };
    
   
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML="!!Welcome "+user_name

function addRoom(){
      var room_name=document.getElementById ("room_name").value 
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding_room_name"
      })
      localStorage.setItem("room_name",room_name)
      window.location="kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name "+Room_names )
      row="<div class='room_name 'id="+Room_names+"onclick='redirect_to_room_name(this.id)'>"+Room_names+"</div><hr>"
      document.getElementById("output").innerHTML+=row
      

      //End code
      });});}
getData();

function redirect_to_room_name(name){
      localStorage.setItem("room_name",name)
      window.location="kwitter_page.html"
}
 
function logout(){
 localStorage.removeItem("user_name")     
 window.location="index.html"
}
