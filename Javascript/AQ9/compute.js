function arrops()
{
                var arr = document.getElementById("arr").value.split(",");
                for(var i = 0; i < arr.length; i++)
                {
                                arr[i] = parseInt(arr[i]);
                }
                arr.sort(function(a,b){return a - b});
                var min = arr[0];
                var max = arr[arr.length - 1];
                var total = 0, avg = 0;
                for(var i = 0; i < arr.length; i++)
                {
                                total += arr[i];
                }
                avg = total/arr.length;
                document.getElementById("demo").innerHTML = 
                "Min value is " + min + "<br>Max value is " + max
                + "<br>Total is " + total + "<br>Average is " + avg;
}
