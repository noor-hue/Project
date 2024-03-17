const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const googleSignInBtn = document.getElementById('google-signin-button');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

googleSignInBtn.addEventListener('click', () => {
    gapi.auth2.getAuthInstance().signIn();
});

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log('ID: ' + profile.getId());
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail());
    // Here, you can send the user's profile data to your backend for authentication
}
/*
function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.');
    });
}
*/
function onFailure(error) {
    console.log(error);
}

function initGoogleSignIn() {
    gapi.load('auth2', function () {
        gapi.auth2.init({
            client_id: 'YOUR_CLIENT_ID.apps.googleusercontent.com' // Replace with your own client ID
        }).then(function () {
            var element = document.getElementById('google-signin-button');
            var options = {
                scope: 'profile email'
            };
            gapi.signin2.render('google-signin-button', options);
        }, onFailure);
    });
}

initGoogleSignIn();