eval("3 + 2");

eval("function f() { return x + 1; }");

var geval = eval;
var x = "global", y = "global";
function f() {
	var x = "local";
	eval("x += 'changed';");
	return x;
}
function g() {
	var y = "local";
	geval("y += 'changed';");
	return y;
}
console.log(f(), x);
console.log(g(), y);
