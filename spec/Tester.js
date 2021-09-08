class Tester {
  constructor(description) {
    this.all = [];
    this.matchers = new Object();
    this.description = description ? description : "Miscellaneous";
    this.results = new Object;
    this.results.passed = [];
    this.results.failed = [];

    this.matchers.equalityOf = (arg1, arg2) => { return arg1 == arg2 };
    this.matchers.strictEqualityOf = (arg1, arg2) => { return arg1 === arg2 };
    this.matchers.ifDefined = (arg) => { return arg != undefined };

    Testers.all.push(this);
  }

  check() {
    let matcher = arguments[0];
    let args = arguments[1, arguments.length - 2];
    let message = arguments[arguments.length - 1];
    let result = this.matchers[matcher](...args);

    result == true 
    ? this.results.passed.push(message)
    : this.results.failed.push(message)
  }

  showResults() {
    let tester = document.createElement("div");
    tester.setAttribute("class", "tester");

    let heading = document.createElement("div");
    heading.setAttribute("class", "tester-heading")
    heading.innerHTML = this.description;

    let passedTests = document.createElement("div");
    passedTests.setAttribute("class", "test-group passed-tests");

    let failedTests = document.createElement("div");
    failedTests.setAttribute("class", "test-group failed-tests");

    this.results.passed.forEach((result) => {      
      let outcome = document.createElement("span");
      outcome.setAttribute("class", "outcome");
      outcome.innerHTML = "PASSED: "

      let message = document.createElement("span");
      message.setAttribute("class", "message");
      message.innerHTML = result

      passedTests.append(outcome);
      passedTests.append(message);
    })

    this.results.failed.forEach((result) => {
      let failedDiv = document.createElement("div");

      let outcome = document.createElement("span");
      outcome.setAttribute("class", "outcome");
      outcome.innerHTML = "FAILED: "

      let message = document.createElement("span");
      message.setAttribute("class", "message");
      message.innerHTML = result;

      failedDiv.append(outcome);
      failedDiv.append(message);

      failedTests.append(failedDiv);
    })

    tester.appendChild(heading);
    tester.appendChild(passedTests);
    tester.appendChild(failedTests);

    document.querySelector("body").appendChild(tester);
  }
}

const Testers = new Object;
Testers.all = [];
