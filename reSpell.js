function reSpell(value) {
	onesA = [ "", " one", " two", " three", " four", " five", " six", " seven", " eight", " nine", " ten", " eleven", " twelve", " thirteen", " fourteen", " fifteen", " sixteen", " seventeen", " eighteen", " nineteen"] 
	tensA = [ "", "", " twenty", " thirty", " forty", " fifty", " sixty", " seventy", " eighty", " ninety" ] 
	suffixA = ["", " thousand", " million", " billion", " trillion", " quadrillion", " quintillion", " sextillion", " septillion", " octillion", " nonillion", " decillion", " undecillion", " duodecillion", " tredecillion", " quattuordecillion", " quindecillion", " sexdecillion", " septendecillion", " octodecillion", " novemdecillion", " vigintillion" ]
	n = value.toString().replace(/\b(0(?!\b))+/g, "");
	d  = false; ng = false; // default values so JS doesnt scream 'Undefined'
	if (n.match(/-/g) != null) { n = n.replace(/-/g,""); ng = true;	} if (n.indexOf(".") != -1) { d = Number(n.substr(n.indexOf("."))).toFixed(2).substr(2); n = n.substr("0",n.indexOf(".")); }
	function parser(value) {
		n = parseInt(value).toString();
		if (n == "0" && n.length == 1) { return "zero"; } 
			else if (n.length <= 2 && n < 20) { return onesA[n].trim(); }
				else if (n.length <= 2 && n > 19){ return (tensA[n.substr(0,1)] + onesA[n.substr(1,1)]).trim(); }
		if (n.length == 3 && n.substr(1,2) < 20) { return (onesA[n.substr(0,1)] + " hundred" + onesA[parseInt(n.substr(1,2))]).trim(); }
			else if (n.length == 3 && n.substr(1,2) > 19) { return (onesA[n.substr(0,1)] + " hundred" + tensA[n.substr(1,1)] + onesA[n.substr(2,1)]).trim(); }
	}
	if (n.length >= 66) { return "Value too large " + n.length; } if (n.match('[a-zA-Z]') != null || n == "") { return "NaN (Not a Number)"; }
	if (n.length <= 3) { s = parser(n); } // from '0' through '999'
			else { spelledV = []; currentV = [];
				m = n.length % 3; 
				if (m == 1) { n = "00" + n; } else if (m == 2) { n = "0" + n; }
				for ( i = 0, g = 0; i < n.length; i += 3, g++) { currentV[g] = parseInt(n.substr(i,3)); }
				for (currentV.reverse(), i = 0; i < currentV.length; i++) {
					v = parser(currentV[i].toString());
					if (v == "" || currentV[i] == 0) { continue; } 
						else { spelledV.push(v + suffixA[i]); }
				}
				s = spelledV.reverse().toString().replace(/,/g," ");
			}
	if (ng != false) { s = "negative " + s;} if (d != false) { s += " and " + parser(d) + " hundredths"; }
	return s;
}
