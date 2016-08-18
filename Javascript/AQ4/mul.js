function mul(){
	var a = document.getElementById("number").value;

		for(i=1;i<=10;i++)
			{
				document.write(i * a);
				document.write("<br>");
			}
	var retVal = confirm("Do you want to continue ?");
    if (retVal == true)
    {
    	self.location = "file:///C:/Users/shanbhag_s/Desktop/Assignment/Javascript/AQ4/multiplication.html";
	}
	else {
		alert("Thank YOu!")
	}
}