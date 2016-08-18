function isVowel(str) {
	var vowelsCount = 0;
	var c = 0;
	var d = 0;
	var e = 0;
	var f = 0;
	var g = 0;
  //turn the input into a string
  var string = str.toString();

  //loop through the string
  for (var i = 0; i <= string.length - 1; i++) {

  //if a vowel, add to vowel count
    if (string.charAt(i) == "a" || string.charAt(i) == "e" || string.charAt(i) == "i" || string.charAt(i) == "o" || string.charAt(i) == "u") {
      vowelsCount += 1;
      if(string.charAt(i) == "a")
      	{
      		c++;
      		
      	}
      if(string.charAt(i) == "e")
      	{
      		d++;
      		     		
      	}
      if(string.charAt(i) == "i")
      	{
      		e++;
      		
      	}
      if(string.charAt(i) == "o")
      	{
      		f++;
      		
      	}
      if(string.charAt(i) == "u")
      	{
      		g++;  
      				
      	}
    }
  }
  document.write("a " + c +"<br>");
  document.write("e " + d +"<br>");
  document.write("i " + e +"<br>");
  document.write("o " + f +"<br>");
  document.write("u " + g +"<br>");
  return vowelsCount;
}


function Vowel1() {
	var str = document.getElementById("str1").value;
    document.write(isVowel(str));
}
  