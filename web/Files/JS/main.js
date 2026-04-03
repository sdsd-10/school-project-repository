const page = window.location.pathname.split("/").pop();

if (page === "signup.html")
{
    let SignUpButton = document.getElementById('Sign Up');
    SignUpButton.addEventListener("click", SignUpFunc);
}
else if (page === "login.html")
{
    let LoginButton = document.getElementById('Login');
    LoginButton.addEventListener("click", Loginfunc);
}


function Loginfunc(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username && password)
    {
        if(username == getCookie("username") && password == getCookie("password"))
        {
            //SEND TO WEBSiTE
            window.location.assign("indexMain.html")
            alert("Enter website");
        }
        else
        {
            alert("info is wrong");
        }
    }
    else
    {
        alert("fill in the info!");
    }
}


function SignUpFunc(){

    let username = document.getElementById("Username").value;
    let email = document.getElementById("Email").value;
    let password = document.getElementById("Password").value;

    console.log(username);
    console.log(email);
    console.log(password);

    if(username && email && password)
    {
        setCookie("username", username, 1);
        setCookie("email", email, 1);
        setCookie("password", password, 1);
        
        alert("Signup successful!");
        window.location.assign("login.html")
    }
    else
    {
        alert("fill in the info!");
    }
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(name) {
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let pair = cookies[i].split('=');
        if (pair[0].trim() == name) return pair[1];
    }
    return "";
}