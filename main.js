var contactArray = [
  '<li><a href="https://www.linkedin.com/in/keondra-dickey-a5557842/">Linkedin</a></li>',
  '<li><a href="https://github.com/kdickey7">GitHub</a></li>'
]

// var i = 0
// var appendStrings = function(arr, element){
//   while (i < arr.length) {
//     $('#contact-list').append('<' + element + '>' + arr[i] + '</' + element + '>')
//     i++
//   }
// }

// var appendStrings = function(arr, element){
//   for (var i = 0; i < contactArray.length; i++) {
//     $('#contact-list').append('<' + element + '>' + arr[i] + '</' + element + '>')
//   }
// }

// appendStrings(contactArray, 'li')


contactArray.forEach(function(item){
  $('#contact-list').append(item)
})
