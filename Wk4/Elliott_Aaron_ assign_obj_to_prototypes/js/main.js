/**
 * Created by Aaron Elliott
 * Fri Dec 19, 2014
 * Class: PWA
 * Goal: Goal7
 */


(function(){

	doc = document,
	names = ["Aaron", "Jacob", "Job", "Shaun", "Cory"],
	people = {};



	for(i = 0; i < names.length; i++){
		people[i] = names[i];
	}

	console.log(people);

	function populateHTML (){

		for(ii = 0; ii<names.length; ii++){
			var nameFeild = doc.getElementById("r"+ii+"c0"),
			text = doc.createTextNode(names[ii]);
			nameFeild.appendChild(text);
		}
		for(k = 0; k<persons.length; k++){
			var nameFeild = doc.getElementById("r"+k+"c1"),
			text = doc.createTextNode(persons.names[k]);
			nameFeild.appendChild(text);
		}
	} populateHTML();

	 function runUpdate(){
    	(function(){ 
    		
    	});
	 }
	 var myVar = setInterval(function(){ runUpdate() },  1000 / 30);




})();

