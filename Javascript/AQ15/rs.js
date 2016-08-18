function removeSpaces(){
	var string = document.getElementById("str1").value;
	newString = string.replace(/\s+/g,' ').trim();
	document.write(newString);
}