document.forms[0].address.value;

with (document.forms[0]) {
	name.value = "";
	address.value = "";
	email.value = "";
}

var f = document.forms[0];
f.name.value = "";
f.address.value = "";
f.email.value = "";

function f(o) {
	if (o === undefined) debugger;
}
