function account(accNo, accBalc, accName)
{
                this.accNo = accNo;
                this.accBalc = accBalc;
                this.accName = accName;
                this.withdraw = function(amt)
                {
                                if(amt < this.accBalc)
                                {
                                                this.accBalc -= amt;
                                }
                }
                this.deposit = function(amt)
                {
                                this.accBalc += amt;
                }
}
var objects = new account(1,10000,"Mitra Thakker");

function withdraw()
{
                var amt = parseInt(document.getElementById("amt").value);
                objects.withdraw(amt);
                document.getElementById("demo").innerHTML = "After withdrawal: Rs. " + objects.accBalc + "<br>";
}

function checkBal()
{
                document.getElementById("demo").innerHTML = "Current Balance is Rs. " + objects.accBalc;
}

function deposit()
{
                var amt = parseInt(document.getElementById("amt").value);
                objects.deposit(amt);
                document.getElementById("demo").innerHTML = "After deposit: Rs. " + objects.accBalc + "<br>";
}