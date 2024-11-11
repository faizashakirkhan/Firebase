import{auth,createUserWithEmailAndPassword, onAuthStateChanged,signInWithEmailAndPassword,signOut} from "./firebase.js"

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
console.log("user",user);
  } else {
console.log("user not exist");

  }
});

let signup = ()=>{
  let email= document.getElementById("email");
  let password= document.getElementById("password");
  createUserWithEmailAndPassword(auth, email.value, password.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    console.log(error.message);
    
  });
}
let signupbtn = document.getElementById("signupbtn");
signupbtn.addEventListener("click", signup)

let signIn=()=>{
  let email = document.getElementById("email").value
  let password = document.getElementById("password").value

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    console.log(error.code); 
  });
}
let sign_in = document.getElementById("sign_in")
sign_in.addEventListener("click",signIn)

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user);
     window.location.href = "./dashborad.html"

  } else {
  console.log("User not found")
  }
});

let logOut = ()=>{
signOut(auth).then(() => {
console.log("signOut successful");

}).catch((error) => {
  
})
};
let logOutbtn = document.getElementById("logOutbtn");
logOutbtn.addEventListener("click", logOut)