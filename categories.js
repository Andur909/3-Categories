window.addEventListener("load",Initializer);
var category;
let car_list = [];
let gpu_list = [];
let shampoo_list = [];
var input;

function Initializer()
{
	document.getElementById("divInput").style.display = "none";
	document.getElementById("divdisplay").style.display = "none";
	document.getElementById("btnnext").addEventListener("click", Next);
	document.getElementById("btnback").addEventListener("click", Back);
	document.getElementById("btnsubmit").addEventListener("click", Submit);
	document.getElementById("btndisplay").addEventListener("click", Display);
	document.getElementById("btndelete").addEventListener("click", Delete);
}

function Next()
{
	category = document.getElementById("cmbcategory").selectedIndex;
	switch(category)
	{
		case 0:
			alert("Category Required");
			category = "";
			break;
		case 1:
			category = "Car";
			break;
		case 2:
			category = "GPU";
			break;
		case 3:
			category = "Shampoo";
			break;
	}
	if (category != "")
	{
		document.getElementById("divInput").style.display = "block";
		document.getElementById("divtype").style.display = "none";
		document.getElementById("txtinput").focus();
	}
}

function Submit()
{
	input = document.getElementById("txtinput").value;
	if (input != "")
	{
		switch(category)
		{
			case "Car":
				car_list.push(input);
				break;
			case "GPU":
				gpu_list.push(input);
				break;
			case "Shampoo":
				shampoo_list.push(input);
				break;
		}
		document.getElementById("txtinput").value = "";
		document.getElementById("txtinput").focus();
		
	} else {
		alert("The Item is Required");
	}
}

function Display()
{
	document.getElementById("lblcar").innerText = "";
	document.getElementById("lblgpu").innerText = "";
	document.getElementById("lblshampoo").innerText = "";
	
	for (let i=0; i<=car_list.length - 1; ++i)
	{
		var li = document.createElement("li");
		li.innerText = car_list[i];
		lblcar.appendChild(li);
	}
	for (let i=0; i<=gpu_list.length - 1; ++i)
	{
		var li = document.createElement("li");
		li.innerText = gpu_list[i];
		lblgpu.appendChild(li);
	}
	for (let i=0; i<=shampoo_list.length - 1; ++i)
	{
		var li = document.createElement("li");
		li.innerText = shampoo_list[i];
		lblshampoo.appendChild(li);
	}
	
	document.getElementById("divdisplay").style.display = "block";
}

function Back()
{
	document.getElementById("divInput").style.display = "none";
	document.getElementById("divtype").style.display = "block";
	document.getElementById("divdisplay").style.display = "none";
}

function Delete()
{
	category = document.getElementById("cmbcategory").selectedIndex;
	switch(category)
	{	case 0:
			alert("Category Required");
			break;
		case 1:
			car_list = [];
			document.getElementById("lblcar").innerText = "";
			alert("Car list deleted");
			break;
		case 2:
			gpu_list = [];
			document.getElementById("lblgpu").innerText = "";
			alert("GPU list deleted");
			break;
		case 3:
			shampoo_list = [];
			document.getElementById("lblshampoo").innerText = "";
			alert("Shampoo list deleted");
			break;
	}
}
//I finished the required Code before class 1/10/2024, Added the delete button in 10 mins and now Im bored.