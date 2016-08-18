function fact(){
	var a = document.getElementById("num1").value;
	var fact = 1;
	var temp = 1;
	for(i=a; i>0; i--){
		var fact = fact * temp;
		temp = i;
	}
	document.write("Factorial " +fact);
}