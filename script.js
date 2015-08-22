document.addEventListener("DOMContentLoaded", function(){

	var input = document.querySelector("input");
	var form   = document.querySelector("form");
	var ul    = document.querySelector("ul");


	form.addEventListener("submit", function(event){
	  // step 0 - stop the default action of the form
	  event.preventDefault();
	  // step 1 - grab the input value
	  var value = input.value;
	  // step 2 - create a new list item
	  var newLi = document.createElement("li");
	  var newSpan = document.createElement("span");
	  newSpan.innerHTML = "Delete";
	  newLi.addEventListener("click", function(){
	  	console.log(this.className);
	  	if (this.className) {
	  		this.className = "";
	  	}
	  	else {
	  		this.className = "completed";
	  	}
  		});
	  // step 3 - set the innerText of that list item to be the value

	  newLi.innerText = value;
	  // step 4 - append the list item to the UL
	  ul.appendChild(newLi);
	  newLi.appendChild(newSpan);
	  // step 5 - reset the text of the input
	  input.value = "";

	});
});




