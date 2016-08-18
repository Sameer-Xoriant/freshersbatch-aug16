function showBy() {
            var yr = document.getElementById("ageNow").value;
            var d = new Date();
   			var n = d.getFullYear();
            alert(n - yr);
        }