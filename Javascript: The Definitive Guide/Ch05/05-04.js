if (username == null)
	username = "John Doe";

if (!username)
	username = "John Doe";

if (!address) {
	address = "";
	message = "Please specify a mailing address.";
}

if (n == 1)
	console.log("You have 1 new message.");
else
	console.log("Youn have " + n + " new messages.");

i = j = 1;
k = 2;
if (i == j)
	if (j == k)
		console.log("i equals k");
else
	console.log("i doesn't equal j");

if (i == j) {
	if (j == k)
		console.log("i equals k");
	else
		console.log("i doesn't equal j");
}

if (i == j) {
	if (j == k) {
		console.log("i equals k");
	}
}
else {
	console.log("i doesn't equal j");
}

if (n == 1) {
	;
}
else if (n == 2) {
	;
}
else if (n == 3) {
	;
}
else {
	;
}

if (n == 1) {
	;
}
else {
	if (n == 2) {
		;
	}
	else {
		if (n == 3) {
			;
		}
		else {
			;
		}
	}
}

switch(n) {
	case 1:
		;
		break;
	case 2:
		;
		break;
	case 3:
		;
		break;
	default:
		;
		break;
}

function convert(x) {
	switch (typeof x) {
		case 'number':
			return x.toString(16);
		case 'string':
			return '"' + x + '"';
		default:
			return String(x);
	}
}
