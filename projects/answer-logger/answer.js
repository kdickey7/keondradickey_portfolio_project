// functions as inputs
var answerLogger = function(arr) {
  $("#answer").html('<ol></ol>');

  arr.forEach(function(fn){
    var answer = fn();
    $("#answer > ol").append("<li>" + answer + "</li>");
  })
}

var fn1 = function() {
  return "I should appear in div#answer!"
}

var fn2 = function() {
  return "I should below div#answer!"
}

answerLogger([fn1,fn2])

// functions as outputs
var returnsFunction = function () {
  return function(){ console.log('BOOP!') }
}

// have we booped yet?
var booper = returnsFunction()

// how about now?
booper()


var word = 'original'
var phrase = " is the word"

var wordChanger = function (newWord) {
    var word = newWord
    console.log(word + phrase)
}

console.log(word + phrase)
// answer:original is the word
// console.log(new_word + phrase) answer:undefined
wordChanger('changed')
console.log(word + phrase)
// console.log(newWord + phrase) answer:undfined

// leaky word changer
var leakyWordChanger = function (newWord) {
    word = newWord
    console.log(word + phrase)
}

leakyWordChanger('hello')
console.log(word + phrase)
// console.log(newWord + phrase) answer:undefined


/************secret keeper*************/

var secretKeeper = function(string1, string2) {
  var secret = "You can't find me";
  var publicPhrase = string1 + " " + secret + " " + string2;
  $("#answer").append(publicPhrase);
};


// closure
var returnsFunction = function () {
  var word = 'I can see inside'
  return function(){ console.log('BOOP! ' + word) }
}

var word = 'I can see outside'

var newBooper = returnsFunction()
newBooper()

/***************multipliers********************/
var multipliesBy = function(num1){
  return function(num2) {
    return num1 * num2
  }
};

var times5 = multipliesBy(5)
var times10 = multipliesBy(10)

/**************.map()*****************/
