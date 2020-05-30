var s = "hello";
s.toUpperCase();
s;

var o = { x: 1 };
o.x = 2;
o.y = 3;
var a = [1, 2, 3];
a[0] = 0;
a[3] = 4;

var o = {x: 1}, p = {x: 1};
o === p;
var a = [], b = [];
a === b;

var a = [];
var b = a;
b[0] = 1;
a[0];
a === b;

var a = ['a', 'b', 'c'];
var b = [];
for (var i = 0; i < a.length; i++) {
	b[i] = a[i];
}

function equalArrays(a, b) {
	if (a.length != b.length)
		return false;
	for (var i = 0; i < a.length; i++)
		if (a[i] !== b[i])
			return false;

	return true;
}
