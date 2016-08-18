function num(){
	var a = document.getElementById("number1").value;
	var b = document.getElementById("number2").value;

	if(b == 0)
	{
		alert("denominator cant be less than or equal to 0");
	}

	document.getElementById("demo").innerHTML = parseInt(a / b);
}