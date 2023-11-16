//your JS code here. If required.

document.getElementById("incrementBtn").addEventListener("click", function() {
	var value = parseInt(document.getElementById("counter").innerHTML);
	value+=1;
	// alert(value)	
	document.getElementById("counter").innerHTML = value;
});
