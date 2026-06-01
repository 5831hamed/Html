// TABLES
var numbers = [8, 3, 55, 420, 1, -5, 69, -999, 0, 321];
var words = ["skibidi", "rizz", "gyat", "sigma", "sus", "cap", "yeet", "lit", "simp", "cringe"];

var filteredNumbers = [...numbers];
var wordMode = [...words];

// 1
function pickElement() {
  let i = Number(document.getElementById("i1").value);
  document.getElementById("r1").textContent = words[i];
}

// 2
function findIndex() {
  let t = document.getElementById("t1").value;
  document.getElementById("r2").textContent = words.indexOf(t);
}

// 3
function cutTable() {

  let a = Number(document.getElementById("c1").value);
  let b = Number(document.getElementById("c2").value);

  let slice = words.slice(a, b);

  let ul = document.getElementById("r3");
  ul.innerHTML = "";

  slice.forEach(w => {
    let li = document.createElement("li");
    li.textContent = w;
    ul.appendChild(li);
  });
}

// 4 PRINT WORDS
function printWords() {

  let ul = document.getElementById("r4");
  ul.innerHTML = "";

  wordMode.forEach(w => {
    let li = document.createElement("li");
    li.textContent = w;
    ul.appendChild(li);
  });
}

// SORT WORDS
function sortWords() {
  wordMode.sort();
}

// REVERSE WORDS
function reverseWords() {
  wordMode.reverse();
}

// PRINT NUMBERS
function printNumbers() {

  let ul = document.getElementById("r4");
  ul.innerHTML = "";

  filteredNumbers.forEach(n => {
    let li = document.createElement("li");
    li.textContent = n;
    ul.appendChild(li);
  });
}

// SORT NUMBERS (IMPORTANT FIX)
function sortNumbers() {
  filteredNumbers.sort((a, b) => a - b);
}

// REVERSE NUMBERS
function reverseNumbers() {
  filteredNumbers.reverse();
}

// 5 PRINT
function printNums() {

  let ul = document.getElementById("r5");
  ul.innerHTML = "";

  filteredNumbers.forEach(n => {
    let li = document.createElement("li");
    li.textContent = n;
    ul.appendChild(li);
  });
}

// SMALLER FILTER
function selectSmaller() {

  let n = Number(document.getElementById("f1").value);

  filteredNumbers = numbers.filter(x => x < n);
}

// LARGER FILTER
function selectLarger() {

  let n = Number(document.getElementById("f1").value);

  filteredNumbers = numbers.filter(x => x > n);
}