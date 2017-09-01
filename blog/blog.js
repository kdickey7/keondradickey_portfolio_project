var getPosts = $.ajax("https://jsonplaceholder.typicode.com/posts");

var handlePost = function(post) {
  var title = "<h3>" + post.title + "</h3>";
  var content = "<p>" + post.body + "</p>";
  var blurb = "<div class='post'>" + title + content + "</div>";

  $(".blogcontent").append(blurb);
}

getPosts.then(
  (posts) => posts.forEach(handlePost)
)
