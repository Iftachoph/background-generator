var database = [
  { 
    username: "Iftach",
    password: "secret"
  },
   { 
    username: "yael",
    password: "good"
  },
  { 
    username: "yoyo",
    password: "1234"
  }
 ];
var newsfeed = [
  { 
  username: "ophir",
  timeline: "I am tired!"
  },
  { username: "yael",
   timeline: "i went home"
   }
];

function isUserValid(username, password){
  for(var i=0; i < database.length; i++){
  if(database[i].username === username &&
        database[i].password === password){
        return true;
       }
    }
  
  return false;
        
}

function signIn (username, password){
   if (isUserValid(username, password)) {
    console.log(newsfeed);
   }else{
   alert("sorry wrong password and username");

  
      
   }
    }

var userNamePrompt = prompt("whats your username?");
var passwordPrompt = prompt("whats your password?");

 signIn(userNamePrompt, passwordPrompt);