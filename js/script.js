document.getElementById("boutonUpdate").onmouseover = function (){
document.getElementById("boutonUpdate").style.color = "blue";}; 
document.getElementById("boutonUpdate").onmouseout = function (){
document.getElementById("boutonUpdate").style.color = "red";}; 

document.getElementById("boutonUpdate").onclick = function (){
	  var btn = document.getElementById("boutonUpdate");
	  var txt = document.getElementById("p");
	  if (btn.value === 'Demarrer la machine') {
		btn.value = 'Arreter la machine';
		txt.textContent = 'La machine est demarree !';
	  } else {
		btn.value = 'Demarrer la machine';
		txt.textContent = 'La machine est arretee.';
	  }
};

document.getElementById("bouton2").onclick = function (){	  
	  if(document.getElementById("body").style.backgroundColor === "red"){
		document.getElementById("body").style.backgroundColor = "blue";
	  } else if (document.getElementById("body").style.backgroundColor === "blue"){
		document.getElementById("body").style.backgroundColor = "green";
	  } else if (document.getElementById("body").style.backgroundColor === "green"){
		document.getElementById("body").style.backgroundColor = "yellow";
	  } else {
		  document.getElementById("body").style.backgroundColor = "red";
	  }
};

  



 
//document.getElementById("body").style.color = "#ff0000";
