//var BASE_API_URL = "/api/";
var BASE_API_URL = "http://128.164.212.135/myproject/rest/";
(function() {
    
    $(document).ready(function() {
        updateSignStuff();

function getUserCookie(c_name) {
    if (document.cookie.length > 0) {
        var c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            var c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) c_end = document.cookie.length;
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}

function setUserCookie(c_name, value, expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "": ";expires=" + exdate.toGMTString()) + ";path=/";
}

function setUserCookieExpire(c_name, value) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() - 365);
    document.cookie = c_name + "=" + escape(value) + ";expires=" + exdate.toGMTString() + ";path=/";
}

function checkUserCookie() {
    var username = getUserCookie("username");
    if (username != null && username != "") {
        return true;
    } else {
        return false;
    }
}

function updateSignStuff() {
    if (checkUserCookie()) {
        $("#sign-stuff-col1").html("<a>Welcome, "+getUserCookie("username")+"!</a>");
        $("#sign-stuff-col2").html("<a href=setUserCookieExpire('username',getUserCookie('username'))>Sign out</a>");
    } else {
        $("#sign-stuff-col1").html("<a href='/signup.php'>Sign up</a>");
        $("#sign-stuff-col2").html("<a href='/signin.php'>Sign in</a>");
    }
}
});
} ());