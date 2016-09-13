var config = {
    apiKey: "AIzaSyDEIwwITuqglJypmApoZwe0tFkbkonYLSs",
    authDomain: "example-1aa1e.firebaseapp.com",
    databaseURL: "https://example-1aa1e.firebaseio.com",
    storageBucket: "example-1aa1e.appspot.com",
};
firebase.initializeApp(config);
let myFirebaseRef = firebase;

let dbRefObj = myFirebaseRef.database().ref().child('task');
dbRefObj.on('value', node => {
    console.log(node.val());
});

var tasks= document.getElementById("todoInput").value;
dbRefObj.set({
    
    task : tasks
});

