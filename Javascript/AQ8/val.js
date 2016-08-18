var count = 2;
function validate() {
var un = document.getElementById("uname").value;
var pw = document.getElementById("pass").value;
var valid = false;

var unArray = ["sameer"];  
var pwArray = ["sameer"];  

for (var i=0; i <unArray.length; i++) {
if ((un == unArray[i]) && (pw == pwArray[i])) {
valid = true;
break;
}
}

if (valid) {
alert ("Login was successful");
window.location = "file:///C:/Users/shanbhag_s/Desktop/Assignment/Javascript/AQ8/up.html";
return false;
}

var t = " tries";
if (count == 1) {t = " try"}

if (count >= 1) {
alert ("Invalid username and/or password.  You have " + count + t + " left.");
document.getElementById("uname").value = "";
document.getElementById("pass").value = "";
setTimeout("getElementById(\"uname\").focus()", 25);
setTimeout("getElementById(\"pass\").select()", 25);
count --;
}

else {
alert ("Still incorrect! You have no more tries left!");
document.getElementById("uname").value = "No more tries allowed!";
document.getElementById("pass").value = "";
document.getElementById("uname").disabled = true;
document.getElementById("uname").disabled = true;
return false;
}

}
