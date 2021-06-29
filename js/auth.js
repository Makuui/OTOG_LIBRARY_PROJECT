const signinform = document.querySelector(".sign-in-form");
const signupform = document.querySelector(".sign-up-form");
const loggedin = document.querySelector("#loggedin");
const loggedout = document.querySelector("#loggout");


//listen for changes in authentication
auth.onAuthStateChanged(user => {
    if (user) {
        bago(user);
    } else {
        bago();
    }
})


function signOut() {
    // [START auth_sign_out]
    firebase.auth().signOut().then(() => {
        window.location.href = "index.html";
    }).catch((error) => {
        // An error happened.
    });
    // [END auth_sign_out]
}


//sign up
signupform.addEventListener('submit', (e) => {
    e.preventDefault();
    // get data from the form
    const email = signupform['signup-email'].value;
    const pass = signupform['signup-password'].value;

    auth.createUserWithEmailAndPassword(email, pass).then(cred => {
        console.log(cred.user)
        window.location.href = "books.html";
        signupform.querySelector('.error').innerHTML = '';
    }).catch(err =>{
        signupform.querySelector('.error').innerHTML =  err.message;
      });
});



//sign in
signinform.addEventListener('submit', (e) => {
    e.preventDefault();
    // get data from the form
    const email = signinform['sign-email'].value;
    const pass = signinform['sign-password'].value;

    auth.signInWithEmailAndPassword(email, pass).then(cred => {
        console.log(cred.user)
        window.location.href = "books.html";
        signinform.querySelector('.error').innerHTML = '';
    }).catch(err =>{
        signinform.querySelector('.error').innerHTML =  err.message;
      });
});

//sign in with google
function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)

        .then(result => {
            const user = result.user;
            document.write('Hello ${user.displayName}')
            console.log(user)
            window.location.href = "books.html";
            signupGoogle.querySelector('.error').innerHTML = '';
        })
            .catch(err =>{
          signupGoogle.querySelector('.error').innerHTML =  err.message;
        })
};


