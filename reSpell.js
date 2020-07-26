function reSpell(value) {
	onesA = [ "", " one", " two", " three", " four", " five", " six", " seven", " eight", " nine", " ten", " eleven", " twelve", " thirteen", " fourteen", " fifteen", " sixteen", " seventeen", " eighteen", " nineteen"] 
	tensA = [ "", "", " twenty", " thirty", " forty", " fifty", " sixty", " seventy", " eighty", " ninety" ] 
	suffixA = ["", " thousand", " million", " billion", " trillion", " quadrillion", " quintillion", " sextillion", " septillion", " octillion", " nonillion", " decillion", " undecillion", " duodecillion", " tredecillion", " quattuordecillion", " quindecillion", " sexdecillion", " septendecillion", " octodecillion", " novemdecillion", " vigintillion" ]
	decimalA = [" tenths", " hundredths", " thousandths", " millionths", " billionths", " trillionths", " quadrillionths", " quintillionths", " sextillionths", " septillionths", " octillionths", " nonillionths", " decillionths", " undecillionths", " duodecillionths", " tredecillionths", " quattuordecillionths", " quindecillionths", " sexdecillionths", " septendecillionths", " octodecillionths", " novemdecillionths", " vigintillionths"]
	spelledV = []; currentV = []; currentD = []
	n = value.toString().replace(/\b(0(?!\b))+/g, ""); // convert to string if provided a number / remove leading zeroes except for the first one
	if (n.length >= 66) { return "Value too large " + n.length; } if (n.match('[a-zA-Z]') != null) { return "NaN (Not a Number)"; } // check for unsupported values
	d  = false; ng = false; // predefined values so JS stops erroring 'undefined'
	if (n.match(/-/g) != null) { n = n.replace(/-/g,""); ng = true;	} if (n.indexOf(".") != -1) { d = n.substr(n.indexOf(".")+1); n = n.substr("0",n.indexOf(".")); }
	function reader(value) { n = value;
		function parser(value) { // parses 3 digit numbers and output their spelling
			n = parseInt(value).toString();
			if (n == "0" && n.length == 1) { return "zero"; } 
				else if (n.length <= 2 && n < 20) { return onesA[n].trim(); }
					else if (n.length <= 2 && n > 19){ return (tensA[n.substr(0,1)] + onesA[n.substr(1,1)]).trim(); }
			if (n.length == 3 && n.substr(1,2) < 20) { return (onesA[n.substr(0,1)] + " hundred" + onesA[parseInt(n.substr(1,2))]).trim(); }
				else if (n.length == 3 && n.substr(1,2) > 19) { return (onesA[n.substr(0,1)] + " hundred" + tensA[n.substr(1,1)] + onesA[n.substr(2,1)]).trim(); }
		}
		if (n.length <= 3) { return parser(n); }
		if (n.length > 3) { m = n.length % 3; // modify n to be divisible by 3
			if (m == 1) { n = "00" + n; } else if (m == 2) { n = "0" + n; }
			for ( i = 0; i < n.length; i += 3) { currentV.push(n.substr(i,3)); } // split it in an array by 3
			for (currentV.reverse(), i = 0; i < currentV.length; i++) {
				v = parser(currentV[i].toString());
				if (v == "" || currentV[i] == 0) { continue; } // removes useless values 
					else { spelledV.push(v + suffixA[i]); }
			}
			return spelledV.reverse().toString().replace(/,/g," "); }
	}
	s = reader(n);
	if (ng != false) { s = "negative " + s;} 
	if (d != false) {
		if (d.length <= 3) { s += " and " + reader(d) + decimalA[d.length-1]; }
			else { for (i = 0; i <= d.length; i +=3 ) { currentD.push(d.substr(i,3)); }
				s +=  " and " + reader(d) + decimalA[currentD.length]; }
	} return s;
}
