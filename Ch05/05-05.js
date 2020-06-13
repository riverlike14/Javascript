var count = 0;
while (count < 10) {
	console.log(count);
	count++;
}

function printArray(a) {
	var len = a.length, i = 0;
	if (len == 0)
		console.log("Empty Array");
	else {
		do {
			console.log(a[i]);
		} while (++i < len);
	}
}

for (var count = 0; count < 10; count++)
	console.log(count);

var i, j;
for (i = 0, j = 10; i < 10; i++, j--) {
	sum += i * j;
}

function tail(o) {
	for (;o.next;o = o.next) ;
	return o;
}

for (var i = 0; i < a.length; i++)
	console.log(a[i]);

for (var p in o)
	console.log(o[p]);

var o = { x: 1, y: 2, z: 3 };
var a = [?], i = 0;
for (a[i++] in o) ;

for (i in a) console.log(i);
