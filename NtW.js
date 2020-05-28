// Declare spelling list of numbers
var onesList = [ "", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine" ]
var teensList = [ "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", 
	"seventeen", "eighteen", "nineteen", "twenty" ]
var tensList = [ "", "", "twenty ", "thirty ", "forty ", "fifty ", "sixty ", "seventy ", "eighty ", 
	"ninety " ]
// Add a reader the processes numbers and outputs their spelling
function reader(n, l) {
	if ( l == 1) {
		onesDigit = n[0];
		final = onesList[onesDigit];
	}
	if (l == 2) {
		onesDigit = n[1];
		tensDigit = n[0];
		final = tensList[tensDigit] + onesList[onesDigit];
		if (tensDigit == 1) {
			final = teensList[onesDigit];
		}
	}
	if (l == 3) {
		onesDigit = n[2];
		tensDigit = n[1];
		hundDigit = n[0];
		if (hundDigit == 0) {
			hund = "";
		} else {
			hund = " hundred ";
		}
		final = onesList[hundDigit] + hund + tensList[tensDigit] + onesList[onesDigit];
		if (tensDigit == 1) {
			final = onesList[hundDigit] + hund + teensList[onesDigit];
		}
	}
	switch(n) {
		case "0":
			final = "zero";
			break;
		case "NaN":
			final = "NaN/Not a number (input a number)";
			break;
	}
	return final;
}
/* Add functions to handle if "thousand/million" really
should be placed (cuz zero's) */
function handleThousand(t) {
	if (t == 0) {
		th =  "";
	} else {
		th = " thousand ";
	}
	return th;
}
function handleMillion(m) {
	if (m == 0) {
		mil =  "";
	} else {
		mil = " million ";
	}
	return mil;
}
function handleBillion(b) {
	if (b == 0) {
		bil =  "";
	} else {
		bil = " billion ";
	}
	return bil;
}
function handleTrillion(tr) {
	if (tr == 0) {
		tri =  "";
	} else {
		tri = " trillion ";
	}
	return tri;
}
// Create a function that uses reader()
function spellNumber(n) {
	var n = document.getElementById("input").value;
	var nInt = parseInt(n);
	dec = (n % 1).toFixed(2) * 100 ;
	dec = parseInt(Math.abs(dec)).toString();
	// check if the number is negative.
	ng = 0;
	if ( nInt < 0) {
		var nInt = Math.abs(nInt);
		ng = 1;
	}
	var n = nInt.toString();
	var l = n.length;
	// Add cases that depend on l's length (to assign it's spelling and extension)
	switch(l) {
		// cases that reader() can normally handle
		case 1:
		case 2:
		case 3:
			output = reader(n,l);
			break;
		/* cases reader() cannot handle normally, so we split the numbers
		by 3 and pass those on to reader() to output */
		case 4:
			hun = n.substr(-3);
			t = n.substr(0,1);
			output = reader(t,1) + handleThousand(t) + reader(hun,3);
			break;
		case 5:
			hun = n.substr(-3);
			t = n.substr(0,2);
			output = reader(t,2) + handleThousand(t) + reader(hun,3);
			break;
		case 6:
			hun = n.substr(-3);
			t = n.substr(0,3);
			output = reader(t,3) + handleThousand(t) + reader(hun,3);
			break;
		case 7:
			hun = n.substr(-3);
			t = n.substr(1,3);
			m = n.substr(0,1);
			output = reader(m,1) + handleMillion(m) + reader(t,3) +
				handleThousand(t) + reader(hun,3);
			break;
		case 8:
			hun = n.substr(-3);
			t = n.substr(2,3);
			m = n.substr(0,2);
			output = reader(m,2) + handleMillion(m) + reader(t,3) +
				handleThousand(t) + reader(hun,3);
			break;
		case 9:
			hun = n.substr(-3);
			t = n.substr(3,3);
			m = n.substr(0,3);
			output = reader(m,3) + handleMillion(m) + reader(t,3) +
				handleThousand(t) + reader(hun,3);
			break;
		case 10:
			hun = n.substr(-3);
			t = n.substr(4,3);
			m = n.substr(1,3);
			b = n.substr(0,1);
			output = reader(b,1) + handleBillion(b) + reader(m,3) + handleMillion(m) + reader(t,3) +
				handleThousand(t) + reader(hun,3);
			break;
		case 11:
			hun = n.substr(-3);
			t = n.substr(5,3);
			m = n.substr(2,3);
			b = n.substr(0,2);
			output = reader(b,2) + handleBillion(b) + reader(m,3) + handleMillion(m) + reader(t,3) +
				handleThousand(t) + reader(hun,3);
			break;
		case 12:
			hun = n.substr(-3);
			t = n.substr(6,3);
			m = n.substr(3,3);
			b = n.substr(0,3);
			output = reader(b,3) + handleBillion(b) + reader(m,3) + handleMillion(m) + reader(t,3) +
				handleThousand(t) + reader(hun,3);
			break;
		case 13:
			hun = n.substr(-3);
			t = n.substr(7,3);
			m = n.substr(3,3);
			b = n.substr(1,3);
			tr = n.substr(0,1);
			output = reader(tr,1) + handleTrillion(tr) + reader(b,3) + handleBillion(b) + reader(m,3) + handleMillion(m) + reader(t,3) +
				handleThousand(t) + reader(hun,3);
			break;
		case 14:
			hun = n.substr(-3);
			t = n.substr(8,3);
			m = n.substr(5,3);
			b = n.substr(2,3);
			tr = n.substr(0,2);
			output = reader(tr,2) + handleTrillion(tr) + reader(b,3) + handleBillion(b) + reader(m,3) + handleMillion(m) + reader(t,3) +
				handleThousand(t) + reader(hun,3);
			break;
		case 15:
			hun = n.substr(-3);
			t = n.substr(9,3);
			m = n.substr(6,3);
			b = n.substr(3,3);
			tr = n.substr(0,3);
			output = reader(tr,3) + handleTrillion(tr) + reader(b,3) + handleBillion(b) + reader(m,3) + handleMillion(m) + reader(t,3) +
				handleThousand(t) + reader(hun,3);
			break;
		default:
			output = "unsupported length";
			alert(output);
	}
	// Append "negative" to output when the original number is a negative
	if (ng == 1) {
		output = "negative " + output;
	}
	// only done when the number has a decimal
	if ( dec > 0) {
		decl = dec.length;
		output = output + " and " + reader(dec,decl) + " hundredths";
	}
	document.getElementById("output").innerHTML = output; 
}
