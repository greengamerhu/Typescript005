"use strict";
function usernameCheck(username) {
    if (username.length < 6 && username.length > 30) {
        return false;
    }
    if (username.includes('&') && username.includes('=')
        && username.includes('_') && username.includes('-') && username.includes('+')
        && username.includes("'") && username.includes(',') && username.includes('<') && username.includes('>')) {
        return false;
    }
    if (username.includes('.')) {
        let szamlalo = 0;
        for (var i = 0; i < username.length; i++) {
            if (username.charAt(i) == '.') {
                szamlalo++;
                if (szamlalo > 1) {
                    return false;
                }
            }
        }
    }
    return true;
}
const validateEmail = (email) => {
    return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};
function emailCheck(email) {
    if (validateEmail(email)) {
        return true;
    }
    else {
        return false;
    }
}
function egyezneksEmailCheck(email, email2) {
    if (email == email2) {
        return true;
    }
    else {
        return false;
    }
}
function passwordCheck(password) {
    if (password.length > 5 && password.length > 10) {
        return true;
    }
    return false;
}
document.addEventListener("DOMContentLoaded", function () {
    let username = this.getElementById("username");
});
