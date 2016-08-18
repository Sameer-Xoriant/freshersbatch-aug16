function EmployeeList(id,name,salary,dept_id)
{
	
this.id=id;
this.name=name;
this.salary=salary;
this.dept_id=dept_id;


	this.sortByEmpId=function(args){
		
		args.sort(function(a, b){return a.id-b.id});
		
		document.write("Id: "+args[0].id+" Name: "+args[0].name+" Salary: "+args[0].salary+"Dept_Id: "+args[0].dept_id);
		document.write("<br>Id: "+args[1].id+" Name: "+args[1].name+" Salary: "+args[1].salary+"Dept_Id: "+args[1].dept_id);
		document.write("<br>Id: "+args[2].id+" Name: "+args[2].name+" Salary: "+args[2].salary+"Dept_Id: "+args[2].dept_id);
		document.write("<br>Id: "+args[3].id+" Name: "+args[3].name+" Salary: "+args[3].salary+"Dept_Id: "+args[3].dept_id);
	}
	
	this.sortByDeptId=function(args){
		args.sort(function(a, b){return a.dept_id-b.dept_id});
		
		document.write("Id: "+args[0].id+" Name: "+args[0].name+" Salary: "+args[0].salary+"Dept_Id: "+args[0].dept_id);
		document.write("<br>Id: "+args[1].id+" Name: "+args[1].name+" Salary: "+args[1].salary+"Dept_Id: "+args[1].dept_id);
		document.write("<br>Id: "+args[2].id+" Name: "+args[2].name+" Salary: "+args[2].salary+"Dept_Id: "+args[2].dept_id);
		document.write("<br>Id: "+args[3].id+" Name: "+args[3].name+" Salary: "+args[3].salary+"Dept_Id: "+args[3].dept_id);
	}
	
	this.sortBySalary=function(args){
			args.sort(function(a, b){return a.salary-b.salary});
		
		document.write("Id: "+args[0].id+" Name: "+args[0].name+" Salary: "+args[0].salary+"Dept_Id: "+args[0].dept_id);
		document.write("<br>Id: "+args[1].id+" Name: "+args[1].name+" Salary: "+args[1].salary+"Dept_Id: "+args[1].dept_id);
		document.write("<br>Id: "+args[2].id+" Name: "+args[2].name+" Salary: "+args[2].salary+"Dept_Id: "+args[2].dept_id);
		document.write("<br>Id: "+args[3].id+" Name: "+args[3].name+" Salary: "+args[3].salary+"Dept_Id: "+args[3].dept_id);
	}
}

function sortEmployee(){
	var obj1=new EmployeeList(12123,"Sam",10000,550);
	var obj2=new EmployeeList(12126,"Milind",700100,661);
	var obj3=new EmployeeList(12129,"Mitra",800000,123);
	var obj4=new EmployeeList(12128,"Sonali",900000,789);
	var obj=[obj1,obj2,obj3,obj4];
	
	
	var operation=document.getElementById("operation").value;
	
	if(operation=='emp_id')
		{

			obj1.sortByEmpId(obj);
			
		}
	else if(operation=="dept_id")
		{
			obj1.sortByDeptId(obj);
		}
	else
		{
			obj1.sortBySalary(obj);
		}
}

