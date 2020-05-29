// arrays of spellings 
dgtList = [  "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen" ]
tyList = [ "", "ten", "twenty ", "thirty ", "forty ", "fifty ", "sixty ", "seventy ", "eighty ", "ninety " ]
preList [ " hundered ", " thousand ", " million ", " billion ", " trillion " ]
// handles when to place the prefix
function suffix(v,type) {
	if (v == 0) {
		out =  "";
	} else {
		out = type;
	}
	return out;
}
/* reader() processes numbers and output
their spellings */ 
function reader(n,l) {
	if ( l == 1) {
		onesDgt = n[0];
		final = dgtList[onesDgt];
		if ( onesDgt == 0) {
			final = "zero";
		}
	}
	if (l == 2) {
		onesDgt = n[1]; tensDgt = n[0];
		final = tyList[tensDgt] + dgtList[onesDgt];
		if (tensDgt == 1) {
			sum = parseInt(onesDgt) + 10;
			final = dgtList[sum];
		}
	}
	if (l == 3) {
		onesDgt = n[2]; tensDgt = n[1]; hunDgt = n[0]; 
		final = dgtList[hunDgt] + suffix(hunDgt," hundred ") + tyList[tensDgt] + dgtList[onesDgt];
		if (tensDgt == 1) {
			sum = parseInt(onesDgt) + 10;
			final = dgtList[hunDgt] + suffix(hunDgt," hundred ") + dgtList[sum];
		}
	}
	if ( n == "NaN") {
		final = "NaN/Not a number (input a number)";
	}
	return final;
}
function spell(n) {
	n = document.getElementById("input").value;
	nInt = parseInt(n);
	// isolate the the first 2 decimals only
	dec = (n % 1).toFixed(2) * 100 ; dec = parseInt(Math.abs(dec)).toString();
	// check if the number is negative.
	if ( nInt < 0) {
		nInt = Math.abs(nInt);
		ng = 1;
	} else {
		ng = 0;
	}
	// convert n to integer then reconvert to string to remove stray zeroes
	 n = nInt.toString();
	 l = n.length;
	switch(l) {
		// cases reader() does normally
		case 1: case 2: case 3:
			output = reader(n,l);
			break;
		/* cases reader() can't do normally, so
		we split the number by 3 and pass those */
		case 4:
			hun = n.substr(-3); t = n.substr(0,1);
			output = reader(t,1) + suffix(t," thousand ") + reader(hun,3);
			break;
		case 5:
			hun = n.substr(-3); t = n.substr(0,2);
			output = reader(t,2) + suffix(t, " thousand ") + reader(hun,3);
			break;
		case 6:
			hun = n.substr(-3); t = n.substr(0,3);
			output = reader(t,3) + suffix(t, " thousand ") + reader(hun,3);
			break;
		case 7:
			hun = n.substr(-3); t = n.substr(1,3); m = n.substr(0,1);
			output = reader(m,1) + suffix(m," million ") + reader(t,3) + suffix(t, " thousand ") + reader(hun,3);
			break;
		case 8:
			hun = n.substr(-3); t = n.substr(2,3); m = n.substr(0,2);
			output = reader(m,2) + suffix(m," million ") + reader(t,3) +
				suffix(t, " thousand ") + reader(hun,3);
			break;
		case 9:
			hun = n.substr(-3);	t = n.substr(3,3);m = n.substr(0,3);
			output = reader(m,3) + suffix(m," million ") + reader(t,3) + suffix(t, " thousand ") + reader(hun,3);
			break;
		case 10:
			hun = n.substr(-3); t = n.substr(4,3); m = n.substr(1,3); b = n.substr(0,1);
			output = reader(b,1) + suffix(b," billion ") + reader(m,3) + suffix(m," million ") + reader(t,3) + suffix(t, " thousand ") + reader(hun,3);
			break;
		case 11:
			hun = n.substr(-3); t = n.substr(5,3); m = n.substr(2,3); b = n.substr(0,2);
			output = reader(b,2) + suffix(b," billion ") + reader(m,3) + suffix(m," million ") + reader(t,3) +
				suffix(t, " thousand ") + reader(hun,3);
			break;
		case 12:
			hun = n.substr(-3); t = n.substr(6,3); m = n.substr(3,3); b = n.substr(0,3);
			output = reader(b,3) + suffix(b," billion ") + reader(m,3) + suffix(m," million ") + reader(t,3) + suffix(t," thousand ") + reader(hun,3);
			break;
		case 13:
			hun = n.substr(-3); t = n.substr(7,3); m = n.substr(3,3); b = n.substr(1,3); tr = n.substr(0,1);
			output = reader(tr,1) + suffix(tr," trillion ") + reader(b,3) + suffix(b," billion ") + reader(m,3) + suffix(b," million ") + reader(t,3) + suffix(t," thousand ") + reader(hun,3);
			break;
		case 14:
			hun = n.substr(-3); t = n.substr(8,3); 	m = n.substr(5,3);	b = n.substr(2,3); tr = n.substr(0,2);
			output = reader(tr,2) + suffix(tr," trillion ") + reader(b,3) + suffix(b," billion ") + reader(m,3) + suffix(b," million ") + reader(t,3) + suffix(t," thousand ") + reader(hun,3);
			break;
		case 15:
			hun = n.substr(-3); t = n.substr(9,3); m = n.substr(6,3); b = n.substr(3,3); tr = n.substr(0,3);
			output = reader(tr,3) + suffix(tr," trillion ") + reader(b,3) + suffix(b," billion ") + reader(m,3) + suffix(b," million ") + reader(t,3) + suffix(t," thousand ") + reader(hun,3);
			break;
		default:
			output = "unsupported length";
			alert(output);
	}
	// only done when the number is a negative
	if (ng == 1) {
		output = suffix(ng, " negative ") + output;
	}
	// only done when the number has a decimal
	if ( dec > 0) {
		decl = dec.length;
		output = output + " and " + reader(dec,decl) + suffix(dec, " hundredths ");
		//uncomment the line below and comment the top if you want "/100" instead
		//output = output + " and " + dec + "/100";
	}
	document.getElementById("output").innerHTML = output;
}
