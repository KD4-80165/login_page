var firebaseConfig = {
    apiKey: "AIzaSyCnnEhR2xuFye-3mdCFhBXdJkJkmeuDwSg",
    authDomain: "login-page-adda0.firebaseapp.com",
    projectId: "login-page-adda0",
    storageBucket: "login-page-adda0.appspot.com",
    messagingSenderId: "156840635799",
    appId: "1:156840635799:web:ab4d058af7c55fa843a8d2",
    measurementId: "G-M6HCRBHL02"
  };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    const auth =  firebase.auth();
  
    //signup function
    function signUp(){
      var email = document.getElementById("email");
      var password = document.getElementById("password");
  
      const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
      //
      promise.catch(e=>alert(e.message));
      alert("SignUp Successfully");
    }
  
    //signIN function
    function  signIn(){
      var email = document.getElementById("email");
      var password  = document.getElementById("password");
      const promise = auth.signInWithEmailAndPassword(email.value,password.value);
      promise.catch(e=>alert(e.message));
      
    }
  
  
    //signOut
  
    function signOut(){
      auth.signOut();
      alert("SignOut Successfully from System");
    }
  
    //active user to homepage
    firebase.auth().onAuthStateChanged((user)=>{
      if(user){
        var email = user.email;
        alert("Active user "+email);
  
      }else{
        alert("No Active user Found")
      }
    })