var gameState = {
  firstRoll: true,
  gameOver: false,
  pointNum: 0
}

var diceRoll = function () {
  var randomNum = Math.floor((Math.random()* 6) + 1)
  return randomNum
}

var rollDice = function(numberOfDice){
  var sum = 0
  for (var i = 0; i < numberOfDice; i++) {
    sum = sum + diceRoll()
  }

  return sum
}

var setGameOver = function (){
  gameState.gameOver = true
  $('#roll-button').attr('disabled', 'true')
}

var compareResults1 = function(sum){
  if(sum === 2 || sum === 3 || sum === 12) {
    $('.status').text('Loser!').addClass('loser')
    setGameOver()
  } else if(sum === 7 || sum === 11) {
    $('.status').text('Winner, Winner, Chicken Dinner!').addClass('winner')
    setGameOver()
  } else {
    $('.status').text('On Point' + sum)
    gameState.pointNum = sum
    gameState.firstRoll = false
  }
}

var compareNextResult = function(sum){
  if(sum === 7){
    $('.status').text('Loser!').addClass('loser')
    setGameOver()
  } else  if(sum === gameState.pointNum) {
    $('.status').text('Winner, Winner, Chicken Dinner!').addClass('winner')
    setGameOver()
  } else {
    $('.status').text('Try again')
  }
}

$('#roll-button').on('click', function() {
  if(gameState.firstRoll){
    var sum = rollDice(2)
    $('.roll-result').text(sum)
    compareResults1(sum)
    } else {
      var sum = rollDice(2)
      $('.roll-result').text(sum)
      compareNextResult(sum)
  }
})

$('#play-again').on('click',function() {
  location.reload(true)
})
