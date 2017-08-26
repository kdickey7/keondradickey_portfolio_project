var contactArray = [
  '<li><a href="https://www.linkedin.com/in/keondra-dickey-a5557842/">Linkedin</a></li>',
  '<li><a href="https://github.com/kdickey7">GitHub</a></li>'
]

var contactObj = {
  'github' : '<li><a href="https://github.com/kdickey7">GitHub</a></li>',
  'linkedin' : '<li><a href="https://www.linkedin.com/in/keondra-dickey-a5557842/">Linkedin</a></li>'
}

var contactObj = {
    "name": {
        "firstName": "Professor",
        "lastName": "Chaos"
    },
    "email": "professor@professorchaos.com",
    "twitter": "@ProfChaos",
    "quote": "Prepare to meet thy doom"
}

contactObj['phone'] = '123-456-7890'
contactObj ['facebook'] = 'facebook'

var quote = 'Carpe Diem'
contactObj['quote'] = quote

// contactObj.getGithub = function() {
//   return contactObj.github
// }

contactObj.quote = [
    "Prepare to meet thy doom",
    "Nobody expects Professor Chaos",
    "Bow before the power of the DARK SIDE"
]

console.log(contactObj)

var elementLister = function (contactElement) {
  var listString = "<li>" + contactElement + "</li>";

  if (Array.isArray(contactElement)){
    listString = "<ol>";

    contactElement.forEach(function(element){
      listString += "<li>" + element + "</li>";
    });

    listString += "</ol>";
    } else if(typeof contactElement === "object"){
     listString = "<li>";

     for(var element in contactElement){
       listString += contactElement[element] + " ";
     }

     listString += "</li>";
    }

    $("#contact-list").append(listString);
    };

    // for(var contactType in contactObj){
    // elementLister( contactObj[contactType] );
    // }



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
