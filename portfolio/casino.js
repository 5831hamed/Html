function rollDice() {

  var diceNumber =
    Math.floor(Math.random() * 6) + 1;

  document.getElementById('dice').textContent =
    '🎲 You rolled: ' + diceNumber;
}

function drawLotto() {

  var lottoNumbers = [];

  while (lottoNumbers.length < 7) {

    var number =
      Math.floor(Math.random() * 40) + 1;

    if (!lottoNumbers.includes(number)) {
      lottoNumbers.push(number);
    }
  }

  lottoNumbers.sort(function(a, b) {
    return a - b;
  });

  document.getElementById('lotto').textContent =
    '🍀 Lotto numbers: ' + lottoNumbers.join(', ');

  var userNumbers = [

    parseInt(document.getElementById('n1').value),
    parseInt(document.getElementById('n2').value),
    parseInt(document.getElementById('n3').value),
    parseInt(document.getElementById('n4').value),
    parseInt(document.getElementById('n5').value),
    parseInt(document.getElementById('n6').value),
    parseInt(document.getElementById('n7').value)

  ];

  var correct = 0;

  for (var num of userNumbers) {

    if (lottoNumbers.includes(num)) {
      correct++;
    }
  }

  document.getElementById('matches').textContent =
    'Correct guesses: ' + correct + ' / 7';
}