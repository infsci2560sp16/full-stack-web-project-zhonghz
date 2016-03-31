window.onload = init;

$(function(){
        $("#submit").click(function(){

        var username = $("#username").val();
				var password = $("#password").val();
        var email = $("#email").val();
        var fname = $("#fname").val();
        var lname =$("#lname").val();
				var gender =$('input:radio[name="gender"]:checked').val();
				var language =$("#language").val();
				var planguage =$("#planguage").val();
				var topic =$("#topic").val();

        var obj = JSON.stringify({"username":username,"password":password,
																	"email":email,"fname":fname,"lname":lname,
																	"gender":gender,"language":language,"planguage":planguage,"topic":topic});
              $.ajax({
                  contentType:'application/json',
                  url: '/api/register',
                  type: "POST",
                  datatype: "json",
                  data: obj,
                  success: function(data) {
                      alert("Welcome! You have registered successfully!");
                      window.location.href='/index.html';
											console.log(data);
                  }
              });
                    return false;
          });
   });


function init() {
	setControls();
}

function setControls() {
	//Populating the array with objects
	//containing default texts and corresponding validation functions
	var setupArray = [
         {
		 	defaultText: '6-12 characters',
		    validate: checkUsername
		 },
		 {
		 	defaultText: '6-18 characters',
			validate: checkPassword
		 },
		 {
		 	defaultText: 'Enter valid email address',
		    validate: checkEmail
		 },
		 {
		 	defaultText: 'Enter first name',
			validate: checkFirstName
		 },
		 {
			 defaultText: 'Enter last name',
			 validate: checkLastName
		 },
	];

// Set required fields
	var requiredFields = document.getElementsByClassName('required');
	//Displaying default text in each field
	for (var i=0; i<requiredFields.length; i++) {
		requiredFields[i].value = setupArray[i].defaultText;
		requiredFields[i].style.color = '#a8a8a8';
		requiredFields[i].style.fontStyle = 'italic';

		// Assigning each object to the corresponding field
		requiredFields[i].setupObject = setupArray[i];

		requiredFields[i].onfocus = function() {
			if (this.value === this.setupObject.defaultText) {
				this.value = '';
				this.style.color = '#000';
				this.style.fontStyle = 'normal';
			}
		}; //end focus
		requiredFields[i].onblur = function() {
			if (this.value === '') {
				this.value = this.setupObject.defaultText;
				this.style.color = '#a8a8a8';
				this.style.fontStyle = 'italic';
			}
			this.setupObject.validate();
		}; //end blur
	} //end for loop
} //end setup

// Validation functions
function checkUsername() {
	var username = document.getElementById('username');
	var errUName = document.getElementById('errUname');
	if (username.value === '' || username.value === '6-12 characters') {
		errUName.innerHTML='Please enter your user name';
		errUName.style.display='block';
		return false;
	} else if(username.value.length<6||username.value.length>12){
		errUName.innerHTML='Please enter a valid user name';
		errUName.style.display='block';
		return false;
		}
	else {
		errUName.style.display='none';
		return true;
	}
}

function checkPassword() {
	var password = document.getElementById('password');
	var errPass = document.getElementById('errPass');
	if (password.value === '' || password.value === '6-18 characters') {
		errPass.innerHTML='Please enter your password';
		errPass.style.display='block';
		return false;
	} else if(password.value.length<6||password.value.length>18){
		errPass.innerHTML='Please enter a valid password';
		errPass.style.display='block';
		return false;
		}
	else {
		errPass.style.display='none';
		return true;
	}

}

function checkEmail(){
	var email = document.getElementById('email');
	var emailRegex = /[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/;
	var errEmail = document.getElementById('errEmail');
	if (email.value === '' || email.value === 'Enter valid email address') {
		errEmail.innerHTML='Please enter your email address';
		errEmail.style.display='block';
		return false;
	} else if (!emailRegex.test(email.value)) {
		errEmail.innerHTML='Please enter a valid email address';
		errEmail.style.display='block';
		return false;
	} else {
		errEmail.style.display='none';
		return true;
	}

}

function checkFirstName() {
	var fName = document.getElementById('fname');
	var errFName = document.getElementById('errFname');
	if (fName.value === ''|| fName.value === 'Enter first name') {
		errFName.innerHTML='Please enter your first name';
		errFName.style.display='block';
		return false;
	} else {
		errFName.style.display='none';
		return true;
	}

}

function checkLastName(){
	var lName = document.getElementById('lname');
	var errLName = document.getElementById('errLname');
	if (lName.value === '' || lName.value === 'Enter last name') {
		errLName.innerHTML='Please enter your last name';
		errLName.style.display='block';
		return false;
	} else {
		errLName.style.display='none';
		return true;
	}

}

function submitTest(){
		  var result = true;
			result = checkUsername() && result;
			result = checkPassword() && result;
			result = checkEmail() && result;
			result = checkFirstName() && result;
			result = checkLastName() && result;
			if(!result){
				alert("Please fill in all information");
			}else{
				alert("Successfully registered");
				}
			return result;
}

//show other function
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
