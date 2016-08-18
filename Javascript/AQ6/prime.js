function isPrime(){
	var a = document.getElementById("num1").value;
	var b = document.getElementById("num2").value;
	document.write("Prime numbers are " + a + b);
	while (a < b)
    {
        var flag=0;

        for(i=2; i<=a/2; ++i)
        {
            if(a%i == 0)
            {
                var flag = 1;
                break;
            }
        }

        if (flag == 0)
            document.write(" " +a);

        ++a;
    }

    return 0;
}

