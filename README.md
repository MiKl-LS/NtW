# reSpell.js (Number Speller)
Spells provided numbers using JavaScript (Up to 18 digits, or a hundred quadrillion)

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
 - Make a function that calls the `spell()` function 
 
 example HTML:
 ```
<input id="input" type="number">
<button onclick="spell(n)"> spell </button>
 ```
 
 example JavaScript to trigger `spell()`:
 ```
 <script src="https://mikl-ls.github.io/reSpell.js/reSpell.js"> // load reSpell.js
 <script>
 function reSpell() {
  n = document.getElementById("input").value; // gets value from an input tag with the id 'input' 	
  document.getElementById("output").innerHTML = spell(n);
 }
 </script>
 ```
A demo/preview is available at https://mikl-ls.github.io/reSpell.js
