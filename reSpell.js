function reSpell(number) {
	onesArray = [ "", " one", " two", " three", " four", " five", " six", " seven", " eight", " nine", " ten", " eleven", " twelve", " thirteen", " fourteen", " fifteen", " sixteen", " seventeen", " eighteen", " nineteen" ]
	tensArray = [ "", "", " twenty", " thirty", " forty", " fifty", " sixty", " seventy", " eighty", " ninety" ]
	suffixArray = [ "", " thousand", " million", " billion", " trillion", " quadrillion", " quintillion", " sextillion", " septillion", " octillion", " nonillion", " decillion", " undecillion", " duodecillion", " tredecillion", " quattuordecillion", " quindecillion", " sexdecillion", " septendecillion", " octodecillion", " novemdecillion", " vigintillion" ]
	function reader(n) { // heart of reSpell.js
		n = parseInt(n).toString(); l = n.length; // makes sure '012' is read as '12'
		if ( n == "0") { return "zero"; }
		if ( l <= 2 && n < 20) { return (onesArray[n]).trim(); }
		if ( l == 2 && n > 19) { return (tensArray[n.substr(0,1)] + onesArray[n.substr(1,1)]).trim(); }
		if ( l == 3 && n[1] == 1 ) { return (onesArray[n.substr(0,1)] + " hundred" + onesArray[n.substr(1,2)]).trim(); }
		if ( l == 3 && n[1] != 1 ) { return (onesArray[n.substr(0,1)] + " hundred" + tensArray[n.substr(1,1)] + onesArray[n.substr(2,1)]).trim(); }
	}
	if ( number.length > 66) { return "Unsupported Length: " + number.length; } // prevent overflow lol
	n = number.toString().replace(/\b0+/g, ''); if (n == "") { n = "0"; } // truncate the leading zeroes
	d  = false; ng = false; // values so JS doesnt scream 'Undefined'
	if (n.match(/-/g) != null) { n = n.replace(/-/g,""); ng = true;	}
	if (n.indexOf(".") != -1) { d = Number(n.substr(n.indexOf("."))).toFixed(2).substr(2); n = n.substr("0",n.indexOf(".")); }
	l = n.length; 
	if ( l <= 3) { output = reader(n); /* default */ } else {
		modulus = l % 3; 
		if (modulus == 1) { n = "00" + n; } if (modulus == 2) { n = "0" + n; } // modify the n to be divisible by 3
		l = n.length; // redefine l after modifying
		output = []; currentValue = []; currentDecimal = []
		for ( i = 0, ind = 0; i <  l; i += 3, ind++) { currentValue[ind] = parseInt(n.substr(i,3)); } // store the new number in an array by 3
		for (currentValue.reverse(), i = 0; i < currentValue.length; i++) {
			val = reader(currentValue[i].toString());
			if (val == "" || currentValue[i] == 0) { continue; } else { // do nothing (removes useless values)
				output.push(val + suffixArray[i]);
			}
		}
		output = output.reverse().toString().replace(/,/g," "); // reverse the reversed output & remove the commas
	}
	if (ng != false) { output = "negative " + output;} if (d != false) { output += " and " + reader(d) + " hundredths"; }
	return output; 
}
