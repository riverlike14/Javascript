10 + " objects";
"7" * "4";
var n = 1 - "x";
n + " objects";

null == undefined;
"0" == 0;
0 == false;
"0" == false;

Number("3");
String(false);
Boolean([ ]);
Object(3);

x + "";
+x;
!!x;

var n = 17;
binary_string = n.toString(2);
octal_string = "0" + n.toString(8);
hex_string = "0x" + n.toString(16);

var n = 123456.789;
n.toFixed(0);
n.toFixed(2);
n.toFixed(5);
n.toExponential(1);
n.toExponential(3);
n.toPrecision(4);
n.toPrecision(7);
n.toPrecision(10);

parseInt("3 blind mice");
parseFloat(" 3.14 meters");
parseInt("-12.34");
parseInt("0xFF");
parseInt("0xff");
parseInt("-0XFF");
parseFloat(".1");
parseInt("0.1");
parseInt(".1");
parseFloat("$72.47");

parseInt("11", 2);
parseInt("ff", 16);
parseInt("zz", 36);
parseInt("077", 8);
parseInt("077", 10);

[1, 2, 3].toString();
(function(x) { f(x); }).toString();
/\d+/g.toString();
new Date(2010, 0, 1).toString();

var d = new Date(2010, 0, 1);
d.valueOf();

var now = new Date();
typeof (now + 1);
typeof (now - 1);
now == now.toString();
now > (now - 1);
