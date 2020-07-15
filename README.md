# reSpell.js
JavaScript library that spells provided numbers using JavaScript 

Main code is on `reSpell.js`

Because of JavaScript's floating point, numbers are passed as strings (there is also ~~a lazy~~ basic conversion but not for number 15+ digits long)
- Current limit is 36 digits (hundred decillion, why do more?)
- Limit for decimals is 2 digits (numbers with 3 or more digit decimals are rounded to 2 digits). Might redo later

For this to work on your own HTML do the following:

- Link this script: (downloaded locally or from GitHub)
```
<script src="reSpell.js">
```
```
<script src="https://mikl-ls.github.io/reSpell.js/reSpell.js">
```
 - Make a function that calls the `reSpell()` function 
 
 example HTML:
 ```
<p id="output"> Output for JS is here </p>
<input id="input" type="number">
<button onclick="spell()"> spell </button> 
 ```
 
 example JavaScript to trigger `reSpell()`:
 ```
 <script src="https://mikl-ls.github.io/reSpell.js/reSpell.js"></script>
 <script>
 function spell() {
  n = document.getElementById("input").value; // gets value from an input tag with the id 'input' 	
  // reSpell.js won't check if it's NaN (not a number), do it yourself manually
 if ( n.match('[a-zA-Z]') != null ) { 
					document.getElementById("output").innerHTML = "NaN/Not a Number"
					return;
  }
  document.getElementById("output").innerHTML = reSpell(n);
 }
 </script>
 ```
A demo/preview is available at https://mikl-ls.github.io/reSpell.js
