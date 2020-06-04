onesList = [ "", " one", " two", " three", " four", " five", " six", " seven", " eight", " nine", " ten", " eleven", " twelve", " thirteen", " fourteen", " fifteen", " sixteen", " seventeen", " eighteen", " nineteen" ]
tensList = [ "", "", " twenty", " thirty", " forty", " fifty", " sixty", " seventy", " eighty", " ninety" ]
prefix = [ "", " thousand", " million", " billion", " trillion", " quadrillion", " quintillion" ]
function reader(n) {
	n = parseInt(n);
	if ( n < 20) { return onesList[n]; }
	if ( n > 19 && n < 100) {
		n = n.toString(); onesDgt = n[1]; tensDgt = n[0];
		return tensList[tensDgt] + onesList[onesDgt];
	}
	if ( n > 99 && n < 1000) {
		n = n.toString(); onesDgt = n[2]; tensDgt = n[1]; 
		return onesList[n.substr(0,1)] + " hundred" + tensList[tensDgt] + onesList[onesDgt]; 
		if (tensDgt == 1) {
			sum = parseInt(onesDgt) + 10;
			return onesList[n.substr(0,1)] + " hundred" + onesList[sum];
		}
	}
}
function spell() {
	n = document.getElementById("input").value;
	if ( parseInt(n) < 0) { n = Math.abs(parseInt(n)); ng = 1; } else {	ng = 0; }
	n = parseInt(n).toString();
	l = n.length;
	if ( l > 3) {
		rem = l % 3;
		switch(rem) {
			case 1: n = "00" + n;
				break;
			case 2:	n = "0" + n;
		}
		l = n.length;
		var ind = 0; var places = []
		for ( i = 0; i <  l; i += 3, ind++) {
			places[ind] = n.substr(i,3);
		}
		places.reverse();
		output = []
		for (i = 0; i < places.length; i++) {
			p = reader(places[i].toString());
			if (p == "") {
				// do nothing
			} else {
				output.push(reader(places[i].toString())+ prefix[i]);
			}
		}
		output.reverse();
 	} else { output = reader(n,l); }
	if (ng == 1) { output = "negative " + output;}
	document.getElementById("output").innerHTML =  output;
}
