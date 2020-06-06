1 + 2;
"1" + "2";
"1" + 2;
11 < 3;
"11" < "3";
"11" < 3;
"one" < 3;

var point = { x: 1, y: 1 };
"x" in point;
"z" in point;
"toString" in point;
var data = [7, 8, 9];
"0" in data;
1 in data;
3 in data;

var d = new Date();
d instanceof Date;
d instanceof Object;
d instanceof Number;
var a = [1, 2, 3];
a instanceof Array;
a instanceof Object;
a instanceof RegExp;
