var o = { x: 1, y: {z: 3} };
var a = [o, 4, [5, 6]];
o.x;
o.y.z;
o["x"];
a[1];
a[2]["1"];
a[0].x;
