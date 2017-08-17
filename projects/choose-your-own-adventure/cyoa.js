var response = prompt("You walk into a room with a chair and a window. Type 'sit' to sit in the chair, type 'gaze' to gaze wistfully out the window and sigh");

if(response === "sit"){
    response = alert ("You will fall into a sunken place and life as you know it will no longer exist.");
  }
  else if (response === "gaze") {
    response = prompt("You will see you future, choose 'remember' if you choose to remember your future or 'forget' is you wish to forget your future");
}
      if(response === "remember"){
        response = alert ("You are now stuck in a place between time and cannot be saved.");
}
      else if (response === "forget") {
            response = alert("You have now magically started your current all over-again.");
} else {
    alert("Please type in a valid input! Refresh the page to try again.");
}
