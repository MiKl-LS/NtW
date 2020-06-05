onesList = [ "", " one", " two", " three", " four", " five", " six", " seven", " eight", " nine", " ten", " eleven", " twelve", " thirteen", " fourteen", " fifteen", " sixteen", " seventeen", " eighteen", " nineteen" ]
tensList = [ "", "", " twenty", " thirty", " forty", " fifty", " sixty", " seventy", " eighty", " ninety" ]
prefix = [ "", " thousand", " million", " billion", " trillion", " quadrillion" ]
function reader(n) {
	if ( n == "0") { return "zero"; }
	if ( n == "NaN") { return "NaN/Not a Number <i>(input <b>a number</b>)</i>" } // custom NaN can be defined
	n = parseInt(n).toString(); l = n.length;
	if ( l <= 2 && n < 20) { return onesList[n]; }
	if ( l == 2 && n > 19) { return tensList[n.substr(0,1)] + onesList[n.substr(1,1)]; }
	if ( l == 3 && n[1] == 1 ) { return onesList[n.substr(0,1)] + " hundred" + onesList[n.substr(1,2)]; }
	if ( l == 3) { return onesList[n.substr(0,1)] + " hundred" + tensList[n.substr(1,1)] + onesList[n.substr(2,1)]; }
}
function spell(n) {
	if ( parseInt(n) < 0) { n = Math.abs(parseInt(n)); ng = 1; } else {	ng = 0; }
	dec = (n % 1).toFixed(2) * 100 ; parseInt(Math.abs(dec)).toString();
	n = parseInt(n).toString();
	l = n.length;
	if ( l < 3) {
		output = reader(n);
 	} else { 
		output = []; currentValue = [] // arrays to be stuffed with data
		if ( l > 18) { return "ERROR: Unsupported Value"; }
		mod = l % 3; // modify the n to be divisible by 3
		if (mod == 1) { n = "00" + n; } if (mod == 2) { n = "0" + n; }
		l = n.length; // redefine l after modifying
		for ( i = 0, ind = 0; i <  l; i += 3, ind++) {
			currentValue[ind] = n.substr(i,3);
		}
		for (currentValue.reverse(), i = 0; i < currentValue.length; i++) {
			e = reader(currentValue[i].toString());
			if (e == "") { continue; // do nothing
			} else {
				output.push(reader(currentValue[i].toString())+ prefix[i]);
			}
		}
		output.reverse();
	}
	if (ng == 1) { output = "negative " + output;}
	if ( dec > 0) {
		decl = dec.length;
		output += " and " + reader(dec) + " hundredths ";
	}
	return output;
}
