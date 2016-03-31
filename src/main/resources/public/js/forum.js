//XML GET
//function browseThread ()
window.onload = browseThread;
function browseThread () {
	$.ajax({
		url : "/api/forum",
		type : "get",
		success : function(result) {
			$("#inv").html("");
			console.log(result);
			threads = result.getElementsByTagName("thread");
			for ( var i = 0; i < threads.length; i++) {
        $("div#demos").append('<div class="edemo" id="demo1">'+
        													'<img class="userPic" src="images/userpic.jpg" alt="userpic" width="60" height="60" />'+
        		    									'<h4>'+'<a href="#">'+threads[i].childNodes[0].firstChild.nodeValue+'</a></h4>'+
        													'<p>'+username+'|'+threads[i].childNodes[2].firstChild.nodeValue+'</p>'+
        	        								'<p class="description">'+threads[i].childNodes[4].firstChild.nodeValue+'</p>'+
        													'<span class="time">'+threads[i].childNodes[3].firstChild.nodeValue+'</span>'+'</div>');
			}
		}
	});
}

function viewmore(obj){
	var view=document.getElementById("view1");
	var demo=document.getElementById("demo1");
	if(view.innerHTML=="View Short Description"){
		var para=document.createElement("p");
		var text=document.createTextNode("short description of the discussion, limit in 100 words.");
		para.appendChild(text);
		demo.appendChild(para);
		view.innerHTML="Close";}
		else{
			view.innerHTML="View Short Description";
			demo.removeChild(demo.lastChild);}
	}
function viewmore2(obj){
	var view=document.getElementById("view2");
	var demo=document.getElementById("demo2");
	if(view.innerHTML=="View Short Description"){
		var para=document.createElement("p");
		var text=document.createTextNode("short description of the discussion, limit in 100 words.");
		para.appendChild(text);
		demo.appendChild(para);
		view.innerHTML="Close";}
		else{
			view.innerHTML="View Short Description";
			demo.removeChild(demo.lastChild);}
	}

function viewmore3(obj){
	var view=document.getElementById("view3");
	var demo=document.getElementById("demo3");
	if(view.innerHTML=="View Short Description"){
		var para=document.createElement("p");
		var text=document.createTextNode("short description of the discussion, limit in 100 words.");
		para.appendChild(text);
		demo.appendChild(para);
		view.innerHTML="Close";}
		else{
			view.innerHTML="View Short Description";
			demo.removeChild(demo.lastChild);}
	}
function viewmore4(obj){
	var view=document.getElementById("view4");
	var demo=document.getElementById("demo4");
	if(view.innerHTML=="View Short Description"){
		var para=document.createElement("p");
		var text=document.createTextNode("short description of the discussion, limit in 100 words.");
		para.appendChild(text);
		demo.appendChild(para);
		view.innerHTML="Close";}
		else{
			view.innerHTML="View Short Description";
			demo.removeChild(demo.lastChild);}
	}
function viewmore5(obj){
	var view=document.getElementById("view5");
	var demo=document.getElementById("demo5");
	if(view.innerHTML=="View Short Description"){
		var para=document.createElement("p");
		var text=document.createTextNode("short description of the discussion, limit in 100 words.");
		para.appendChild(text);
		demo.appendChild(para);
		view.innerHTML="Close";}
		else{
			view.innerHTML="View Short Description";
			demo.removeChild(demo.lastChild);}
	}
function viewmore6(obj){
	var view=document.getElementById("view6");
	var demo=document.getElementById("demo6");
	if(view.innerHTML=="View Short Description"){
		var para=document.createElement("p");
		var text=document.createTextNode("short description of the discussion, limit in 100 words.");
		para.appendChild(text);
		demo.appendChild(para);
		view.innerHTML="Close";}
		else{
			view.innerHTML="View Short Description";
			demo.removeChild(demo.lastChild);}
	}
