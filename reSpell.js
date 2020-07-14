function reSpell(number) {
	onesArray = [ "", " one", " two", " three", " four", " five", " six", " seven", " eight", " nine", " ten", " eleven", " twelve", " thirteen", " fourteen", " fifteen", " sixteen", " seventeen", " eighteen", " nineteen" ]
	tensArray = [ "", "", " twenty", " thirty", " forty", " fifty", " sixty", " seventy", " eighty", " ninety" ]
	prefixArray = [ "", " thousand", " million", " billion", " trillion", " quadrillion", " quintillion", " sextillion", " septillion", " octillion", " nonillion", " decillion" ]
	function reader(n) { // heart of reSpell.js
		if ( n == "0") { return "zero"; } // (lines 6-7) some special cases 
		if ( n == "NaN") { return "NaN/Not a Number <i>(input <b>a number</b>)</i>" }
		n = parseInt(n).toString(); l = n.length;
		if ( l <= 2 && n < 20) { return (onesArray[n]).toString().trim(); }
		if ( l == 2 && n > 19) { return (tensArray[n.substr(0,1)] + onesArray[n.substr(1,1)]).trim(); }
		if ( l == 3 && n[1] == 1 ) { return (onesArray[n.substr(0,1)] + " hundred" + onesArray[n.substr(1,2)]).trim(); }
		if ( l == 3) { return (onesArray[n.substr(0,1)] + " hundred" + tensArray[n.substr(1,1)] + onesArray[n.substr(2,1)]).trim(); }
	}
	n = number; l = n.length;
	if (typeof(n) == "number") { n = n.toString(); }
	d  = false; ng = false; // default values so JS doesnt scream 'Undefined'
	if (n.match(/-/g) != null) { n = n.replace(/-/g,""); ng = true;	}
	if (n.indexOf(".") != -1) { d = (n % 1).toFixed(2) * 100; d = parseInt(Math.abs(d)).toString(); n = n.substr("0",n.indexOf(".")); }
	if ( l < 3) { output = reader(n);
	} else {
		output = []; currentValue = []; currentDecimal = []
		if ( l > 36 || (d > 0 && d.length > 2)) { return "ERROR: Unsupported Length"; }
		modulus = l % 3; // modify the n to be divisible by 3
		if (modulus == 1) { n = "00" + n; } else if (modulus == 2) { n = "0" + n; }
		l = n.length; // redefine l after modifying
		for ( i = 0, ind = 0; i <  l; i += 3, ind++) { // store the new number in an array by 3
			currentValue[ind] = n.substr(i,3);
		}
		for (currentValue.reverse(), i = 0; i < currentValue.length; i++) {
			val = reader(currentValue[i].toString());
			if (val == "") { continue; // do nothing (removes useless prefixes)
			} else {
				output.push(val + prefixArray[i]);
			}
		}
		output = output.reverse().toString().replace(/,/g," "); // reverse the reversed output & remove the commas
	} // append some stuff when needed
	if (ng != false) { output = "negative " + output;} else if (d != false) { output += " and " + reader(d,d.length) + " hundredths"; }
	return output; 
}
