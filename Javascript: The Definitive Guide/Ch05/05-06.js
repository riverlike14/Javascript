mainloop: while (token != mull) {
	;
	continue mainloop;
	;
}

for (var i = 0; i < a.length; i++) {
	if (a[i] == target) break;
}

var matrix = getData();
var sum = 0, success = false;
compute_sum: if (matrix) {
	for (var x = 0; x < matrix.length; x++) {
		var row = matrix[x];
		if (!row) break compute_sum;
		for (var y = 0; y < row.length; y++) {
			var cell = row[y];
			if (isNan(cell)) break compute_sum;
			sum += cell;
		}
	}
	success = true;
}

for (i = 0; i < data.length; i++) {
	if (!data[i])
		continue;
	total += data[i];
}

function square(x) { return x * x; }
square(2);

function display_object(o) {
	if (!o) return;
}

function factorial(x) {
	if (x < 0) throw new Error("x must not be negative");
	for (var f = 1; x > 1; f *= x, x--) ;
	return f;
}

try {
	var n = Number(prompt("Please enter a positive integer", ""));
	var f = factorial(n);
	alert(n + "! = " + f);
}
catch (ex) {
	alert(ex);
}
