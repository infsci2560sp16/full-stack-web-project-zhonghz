window.onload = init;
window.onsubmit = onSubmit;

function onSubmit(){
	var result = true;
	result = checkUsername() && result;
	result = checkPassword() && result;
	result = checkCpassword() && result;
	result = checkEmail() && result;
	result = checkFirstName() && result;
	result = checkLastName() && result;
	result = checkGender() && result;
	result = checkNlanguage() && result;
	result = checkPlanguager() && result;
	result = checkTopic() && result;
	return result;
}


function showOther(){
	var ntext=document.getElementById("nother");
	var selectvalue=document.getElementById("language").value;
	if(selectvalue=='other'){
		ntext.style.display="inline-block";	
		}
	else{
		ntext.style.display="none";
		}
	
	var ptext=document.getElementById("pother");
	var selectvalue2=document.getElementById("planguage").value;
	if(selectvalue2=='other'){
		ptext.style.display="inline-block";	
		}
	else{
		ptext.style.display="none";
		}	
	}

function addAnother(){
	var p=document.getElementById("newtopic");
	var newinput=document.createElement("input");
	var newa=document.createElement("a");
	var newimg=document.createElement("img");
	var i=p.childNodes.length;
	if(p.childNodes.length<6){
		newinput.setAttribute("type","text");
		newinput.setAttribute("name","newtopic");
		newinput.setAttribute("id",i);
		newinput.setAttribute("placeholder","Topic");		
		p.appendChild(newinput);
		newa.setAttribute("href","#");
		p.appendChild(newa);
		newimg.setAttribute("src","images/delete.png");	
		newa.appendChild(newimg);
		newimg.onclick = function(){					
			this.parentNode.parentNode.removeChild(document.getElementById(i));
			this.parentNode.parentNode.removeChild(this.parentNode);
			};
		}
	else{
		alert("Maximum number of add toipcs is 3.");
		}	
	}
	
	