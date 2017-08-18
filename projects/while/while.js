// exercise 1

var n = 1;
var outputTarget = document.querySelector('#loop-exercise1')
var outputHtml = "<p>Exercise 1:</p><ul>"


while (n <= 10) {
    console.log(n);
    outputHtml += "<li>" + n + "</li>";
    n++;
}
outputHtml += "</ul>";

outputTarget.innerHTML = outputHtml;


// exercise 2

var p = 2;
outputTarget = document.querySelector('#loop-exercise2')
outputHtml = "<p>Exercise 2:</p><ul>"

while (p <= 20) {
    console.log(p);
    outputHtml += "<li>" + p + "</li>";
    p += 2;
}

outputHtml += "</ul>"

outputTarget.innerHTML = outputHtml;

// exercise 3
//
var k = 100;
var i = 1;
var sum = 0;
outputTarget = document.querySelector('#loop-exercise3')
outputHtml = "<p>Exercise 3:</p><ul>"

while (i < k) {
    sum += i;
    console.log(sum);
    outputHtml  += "<li>" + sum + "</li>"
    i++;
}

outputHtml += "</ul>"

outputTarget.innerHTML = outputHtml;

// exercise 5

var d = 15;
outputTarget = document.querySelector("#loop-exercise5");
outputHtml = "<p>Exercise 5:</p><ul>";

while (d > 0) {
  console.log(d);
  if (d % 2 === 0) {
      outputHtml += "<li>" + d + " even </li>";
    } else {
      outputHtml += "<li>" + d + " odd </li>";
  }
  d--;
}

outputHtml += "</ul>";

outputTarget.innerHTML = outputHtml;

// exercise 6

var r = 1;
outputTarget = document.querySelector("#loop-exercise6");
outputHtml = "<p>Exercise 6:</p><ul>";

while (r <= 100) {
  if(r % 3 === 0 && r % 5 == 0) {
    console.log("FizzBuzz");
    outputHtml += "<li>FizzBuzz</li>";
} else if (r % 3 === 0) {
    console.log("Fizz");
    outputHtml += "<li>Fizz</li>";
} else if (r % 5 === 0) {
    console.log("Buzz");
    outputHtml += "<li>Buzz</li>";
} else {
    console.log(r);
    outputHtml += "<li>" + r + "</li>";
}
  r++;
}

outputHtml += "</ul>";

outputTarget.innerHTML  = outputHtml;
