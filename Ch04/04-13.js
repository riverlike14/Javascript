x > 0 ? x : -x;

greeting = "hello " + (username ? username : "there");

greeting = "hello ";
if (username)
	greeting += username;
else
	greeting += "there";

(typeof value == "string") ? "'" + value + "'" : value;

typeof(i);

var o = { x: 1, y: 2 };
delete o.x;
"x" in o;

var a = [1, 2, 3];
delete a[2];
2 in a;
a.length;

var o = { x: 1, y: 2 };
delete o.x;
typeof o.x;
delete o.x;
delete o;
delete 1;
this.x = 1;
delete x;
x;
<a href="javascript:void window.open();">Open New Window</a>

j = 0, j = 1, k = 2;
i = 0; j = 1; k = 2;

for (var i = 0, j = 10; i < j; i++, j--)
	console.log(i + j);
