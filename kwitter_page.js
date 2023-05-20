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
  room_name=localStorage.getItem("room_name")
  function send(){
    var msg=document.getElementById("msg").value
    firebase.database().ref(room_name).push({
      name:user_name,
      msg:msg,
      like:0
    })
    document.getElementById("msg").value=""
  }
//YOUR FIREBASE LINKS

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
  firebase_message_id = childKey;
  message_data = childData;
//Start code
name=message_data["name"]
text=message_data["msg"]
likes=message_data["like"]
var name_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>"
var msg_tag="<h4>"+text+"class='message_h4' </h4>"//wrong line
var likebutton="<button id="+firebase_message_id+"onclick='update_like(this.id)'class='btn btn-warning'value= "+like+">"
var span="<span class='glyphicon glyphicon-thumbs-up'>like: "+like+"</span> </button> <hr>"
row=name_tag+msg_tag+likebutton+span
document.getElementById("output")//incomplete
//End code
} });  }); }
getData();


  function logout(){
    localStorage.removeItem("user_name")
    localStorage.removeItem("room_name")
    window.location.replace("index.html")
  } 
   