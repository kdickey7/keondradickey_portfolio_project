var response = prompt("You walk into a room with a chair and a window. Type 'sit' to sit in the chair, type 'gaze' to gaze wistfully out the window and sigh");

if(response === "sit"){
    response = prompt("Here's a new prompt, with new options");
} else if (response === "gaze") {
    response = prompt("Here's a new prompt, with new options");
} else {
    alert("Please type in a valid input! Refresh the page to try again.");
}
