
function usernameCheck(username: string): boolean { 
    if (username.length < 6 && username.length > 30) {
        return false;
    }
    if (    username.includes('&') && username.includes('=')
     && username.includes('_') && username.includes('-') && username.includes('+') 
     && username.includes("'") && username.includes(',') && username.includes('<') && username.includes('>')){ 
        return false;
     }
    if (username.includes('.') ){
        let szamlalo =0;
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

const validateEmail = (email :string) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    }

function emailCheck(email : string) : boolean {
    if (validateEmail(email)) { 
        return true;
    } else {
        return false;
    }
}
function egyezneksEmailCheck(email : string, email2 : string)  : boolean { 
    if (email == email2) { 
        return true; 
    } else {
        return false;
    }

}

function passwordCheck(password : string) : boolean {
    if (password.length > 5 && password.length > 10) {
        return true;
    }
    return false;
}
document.addEventListener("DOMContentLoaded", function () {
    let username = (this.getElementById("username") as HTMLInputElement);  
    
})