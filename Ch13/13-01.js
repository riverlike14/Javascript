window.location = "http://www.oreilly.com";

setTimeout(function() { alert("Hello world"); }, 2000);

var timestamp = document.getElementById("timestamp");

if (timestamp.firstChild == null)
	timestamp.appendChild(document.createTextNode(new Date().toString()));

timestamp.style.backgroundColor = "yellow";
timestamp.className = "highlight";

timestamp.onClick = function() { this.innerHTML = new Date().toString(); };
