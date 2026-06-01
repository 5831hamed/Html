function pickLetter() {

  var text =
    document.getElementById('pickText').value;

  var index =
    parseInt(document.getElementById('pickIndex').value);

  document.getElementById('pickResult').textContent =
    text[index];
}

function findIndex() {

  var text =
    document.getElementById('indexText').value;

  var search =
    document.getElementById('indexSearch').value;

  document.getElementById('indexResult').textContent =
    text.indexOf(search);
}

function cutString() {

  var text =
    document.getElementById('sliceText').value;

  var start =
    parseInt(document.getElementById('sliceStart').value);

  var end =
    parseInt(document.getElementById('sliceEnd').value);

  document.getElementById('sliceResult').textContent =
    text.slice(start, end);
}

function replaceText() {

  var text =
    document.getElementById('replaceText').value;

  var oldText =
    document.getElementById('replaceOld').value;

  var newText =
    document.getElementById('replaceNew').value;

  document.getElementById('replaceResult').textContent =
    text.replaceAll(oldText, newText);
}

function crossStack() {

  var text =
    document.getElementById('splitText').value;

  var splitChar =
    document.getElementById('splitChar').value;

  var result =
    text.split(splitChar);

  var ul =
    document.getElementById('splitResult');

  ul.innerHTML = '';

  for (var item of result) {

    var li =
      document.createElement('li');

    li.textContent = item;

    ul.appendChild(li);
  }
}