var i;
var j = 0;
var p, q;
var greeting = "hello" + name;
var x = 2.34, y = Math.cos(0.75), r, theta;
var x = 2, y = x*x;
var x = 2,
	f = function(x) { return x*x },
	y = f(x);

for (var i = 0; i < 10; i++) console.log(i);
for (var i = 0, j = 10; i < 10; i++, j--) console.log(i * j);
for (var i in o) console.log(i);

var f = function(x) { return x + 1; }
function f(x) { return x + 1; }

function hypotenuse(x, y) {
	return Math.sqrt(x*x + y*y);
}
function factorial(n) {
	if (n <= 1) return 1;
	return n * factorial(n - 1);
}
