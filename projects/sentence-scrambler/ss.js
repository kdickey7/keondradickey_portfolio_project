var stringPrinter = function(starterString){
  $('#output').append(starterString)
}

var funnySentence = function ( noun, adjective, verb, adverb) {
  var sentence = `<p>The ${adjective} ${noun} ${verb} ${adverb}.</p>`
  stringPrinter(sentence)
}

// extra credit
//   random word generator
//   remove inputs


var randNumBetween0and4 = function(){
  var randomNum = Math.floor(Math.random() * 4)
  return randomNum
}


var randomWordGenerator = function() {
  var nouns = ['car', 'cat', 'table', 'tv', 'eclipse']
  var adjectives = ['quiet', 'fast', 'loud', 'gold', 'large']
  var verbs = ['go', 'stopped', 'hit', 'smacked', 'pounded']
  var adverbs = ['happily', 'loudly', 'abruptly', 'lightly', 'sloppily']
  var randomWordObject = {
    randomNoun : nouns[randNumBetween0and4()],
    randomAdjective : adjectives[randNumBetween0and4()],
    randomVerb : verbs[randNumBetween0and4()],
    randomAdverb : adverbs[randNumBetween0and4()],
  }
  return randomWordObject
}

var autoFunnySentence = function () {
  var randomWordObject = randomWordGenerator()
  funnySentence(randomWordObject.randomNoun, randomWordObject.randomAdjective, randomWordObject.randomVerb, randomWordObject.randomAdverb)
}

autoFunnySentence()

// events - lesson 3 week 3
// native js event listener

var fn = function() {
  console.log('heeeyyy')
}

// document.querySelector('#target').addEventListener('click',fn);

// document.querySelector('#target').addEventListener('click', function(){console.log('same deal')});


// jquery event listener

$('div').on('click',function(){
  console.log('A div has been clicked!')
});

$('p').click(function () {
  $('p').show().css('color', 'red').text('boom goes the dynamite!')
});

// mouseover

// $('li').on('mouseover',function(event) {
//   var target = event.target;
//   console.log(event)
//   $(target).addClass('highlighted')
// })
//
// $('li').on('mouseleave',function(event) {
//   var target = event.target;
//   $(target).removeClass('highlighted')
// })

// mouseover listener with this

$('li').on('mouseover',function() {
  $(this).addClass('highlighted')
})

$('li').on('mouseleave',function() {
  $(this).removeClass('highlighted')
})
