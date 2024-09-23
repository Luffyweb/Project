var app_firebase = {};
(function() {
    var firebaseConfig = {
        apiKey: "AIzaSyD4rdJwDz1dL3ofhz-TszBUQGTZ2VymZ8o",
        authDomain: "math25-rhombus.firebaseapp.com",
        projectId: "math25-rhombus",
        storageBucket: "math25-rhombus.appspot.com",
        messagingSenderId: "973388759880",
        appId: "1:973388759880:web:6b9dd94875dc4fbd2ae97d",
        measurementId: "G-Q3216FEVST"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    app_firebase = firebase;
    firebase.analytics();
})()
document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});


function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}