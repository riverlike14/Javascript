var scope = "global";
function checkscope() {
	var scope = "local";
	return scope;
}
checkscope();

scope = "global";
function checkscope2() {
	scope = "local";
	myscope = "local";
	return [scope, myscope];
}
checkscope2();
scope;
myscope;

var scope = "global scope";
function checkscope() {
	var scope = "local scope";
	function nested() {
		var scope = "nested scope";
		return scope;
	}
	return nested();
}
checkscope();

function test(o) {
	var i = 0;
	if (typeof(o) == "object") {
		var j = 0;
		for (var k = 0; k < 10; k++) {
			console.log(k);
		}

		console.log(k);
	}

	console.log(j);
}

var scope = "global";
function f() {
	console.log(scope);
	var scope = "local";
	console.log(scope);
}

function f() {
	var scope;
	console.log(scope);
	scope = "local";
	console.log(scope);
}

var truevar = 1;
fakevar = 2;
this.fakevar2 = 3;
delete truevar;
delete fakevar;
delete this.fakevar2;
