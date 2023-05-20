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

  function addUser(){
    var user_name=document.getElementById ("user_name").value
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding User"
    })
    localStorage.setItem("user_name",user_name)
 window.location="kwitter_room.html"
 }