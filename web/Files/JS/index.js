if(!getCookie("username"))
{
    window.location.assign("login.html");
}
else
{
    document.getElementById('userName').textContent = getCookie("username");
}

function getCookie(name) {
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let pair = cookies[i].split('=');
        if (pair[0].trim() == name) return pair[1];
    }
    return "";
}