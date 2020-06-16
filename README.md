# reSpell.js
Spells provided numbers using JavaScript (Up to 36 digits, or a hundred decillion), blame floating point numbers, lol

## Note: This is still on beta. It's also incomplete. (there are more elegant, shorter and better scripts than this)

Majority of the code is on `reSpell.js`

For this to work on your own HTML code do the following:

- Link this script: (locally or from GitHub)
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
<button onclick="spell(n)"> spell </button> 
 ```
 
 example JavaScript to trigger `reSpell()`:
 ```
 <script src="https://mikl-ls.github.io/reSpell.js/reSpell.js"></script> // load reSpell.js
 <script>
 function spell() {
  n = document.getElementById("input").value; // gets value from an input tag with the id 'input' 	
  document.getElementById("output").innerHTML = reSpell(n);
 }
 </script>
 ```
A demo/preview is available at https://mikl-ls.github.io/reSpell.js
