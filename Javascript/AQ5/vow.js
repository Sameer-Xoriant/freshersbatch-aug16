function isVowel(a) {

  var result;

  result = a == "A" || a == "E" || a == "I" || a == "O" || a == "U" || a == "a" || a == "e" || a == "i" || a == "o" || a == "u";
  return result;
}

function isVow(){
	var a = document.getElementById("alphabet").value;
    alert(reg(a));
}

function reg(a) {
     return (/^[aeiou]$/i).test(a);
}