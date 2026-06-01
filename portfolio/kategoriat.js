// ── Person class ───────────────────────────────────────
class Person {
  constructor(name, age, job, driversLicense) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.driversLicense = driversLicense;
  }

  isUnderage() {
    return this.age < 18;
  }

  isStudent() {
    return this.job === 'opiskelija' || this.job === 'student' || this.job === 'Opiskelija';
  }
}

// ── Persons array ──────────────────────────────────────
var persons = [
  new Person('Yousef Al-masri', 20, 'Opiskelija', false),
  new Person('Yaroslav Koval', 20, 'Hacker', true),
  new Person('Topi Saavalinen', 34, 'Ohjelmistosuunnittelija', true),
  new Person('Kuba paskanen', 15, 'Opiskelija', false),
  new Person('Tomas Täkäläinen', 16, 'Linja-autonkuljettaja', true)
];

// ── Build table ────────────────────────────────────────
var tbody = document.getElementById('tbody');

persons.forEach(function(person) {

  var row = document.createElement('tr');

  // Name
  var tdName = document.createElement('td');
  tdName.textContent = person.name;
  row.appendChild(tdName);

  // Age — add 🍺 if 18 or older
  var tdAge = document.createElement('td');
  tdAge.textContent = person.isUnderage()
    ? person.age
    : person.age + ' 🍺';
  row.appendChild(tdAge);

  // Job — add 🎓 if student
  var tdJob = document.createElement('td');
  tdJob.textContent = person.isStudent()
    ? person.job + ' 🎓'
    : person.job;
  row.appendChild(tdJob);

  // Drivers license
  var tdLicense = document.createElement('td');
  tdLicense.innerHTML = person.driversLicense
    ? '<span class="license-yes">Kyllä</span>'
    : '<span class="license-no">Ei</span>';
  row.appendChild(tdLicense);

  tbody.appendChild(row);
});