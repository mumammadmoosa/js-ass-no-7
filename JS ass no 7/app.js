// Q1
// Get a reference to the button element by its ID
var button = document.getElementById("clickMeButton");

// Add a click event listener to the button
button.addEventListener("click", function() {
    // Function to execute when the button is clicked
    document.write("Hi! My name is Muhammad Moosa.");
});

// Q2
// Get references to the button and the element to hide
var hideButton = document.getElementById("hideButton");
var elementToHide = document.getElementById("elementToHide");

// Add a click event listener to the hideButton
hideButton.addEventListener("click", function() {
    // Hide the element by setting its style property
    elementToHide.style.display = "none";
});

// Q3

// Get a reference to the link element by its ID
var hoverLink = document.getElementById("hoverLink");

// Add a mouseover event listener to the link
hoverLink.addEventListener("mouseover", function() {
    // Change the link's color to blue when hovered over
    hoverLink.style.color = "blue";
});

// Add a mouseout event listener to the link
hoverLink.addEventListener("mouseout", function() {
    // Change the link's color back to red when the mouse moves away
    hoverLink.style.color = "red";
});

// Q4

// Get a reference to the link element by its ID
var scrollToTopLink = document.getElementById("scrollToTopLink");

// Add a click event listener to the link
scrollToTopLink.addEventListener("click", function(event) {
    // Prevent the default link behavior (e.g., navigating to a new page)
    event.preventDefault();

    // Scroll to the top of the page smoothly
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Q5

// Get a reference to the link element and the audio element by their IDs
var playSoundLink = document.getElementById("playSoundLink");
var sound = document.getElementById("sound");

// Add a click event listener to the link
playSoundLink.addEventListener("click", function(event) {
    // Prevent the default link behavior (e.g., navigating to a new page)
    event.preventDefault();

    // Play the audio
    sound.play();
});

// Q6

// Get a reference to the link element by its ID
var openNewWindowLink = document.getElementById("openNewWindowLink");

// Add a click event listener to the link
openNewWindowLink.addEventListener("click", function(event) {
    // Prevent the default link behavior (e.g., navigating to a new page)
    event.preventDefault();

    // Open a new window with a specified URL
    var newWindow = window.open("https://www.facebook.com", "_blank");
    
    // Optional: You can customize the properties of the new window, such as size and position
    // newWindow.resizeTo(800, 600);
    // newWindow.moveTo(100, 100);
});

// Q7

// Add a click event listener to the button
document.getElementById("myButton").addEventListener("click", function() {
    // Display an alert message when the button is clicked
    alert("Button clicked!");
});

// Q8
// Get the button element by its ID
const myButton = document.getElementById("myButton");

// Add a "mouseover" event listener to change the button color when hovered
myButton.addEventListener("mouseover", function() {
  myButton.style.backgroundColor = "#FF5733"; // Change to your desired hover color
});

// Add a "mouseout" event listener to reset the button color when not hovered
myButton.addEventListener("mouseout", function() {
  myButton.style.backgroundColor = "#007bff"; // Change to your default color
});

// Q9
// Get the button and audio elements by their IDs
const myButtonN = document.getElementById("myButton");
const myAudio = document.getElementById("myAudio");

// Add a click event listener to the button to play the sound when clicked
myButtonN.addEventListener("click", function() {
  // Check if the audio is currently paused or has ended
  if (myAudio.paused || myAudio.ended) {
    // Play the audio
    myAudio.play();
  } else {
    // If the audio is already playing, pause and reset it to the beginning
    myAudio.pause();
    myAudio.currentTime = 0;
    myAudio.play();
  }
});

// Q10
 // Get a reference to the element you want to track mouseover for
 const myElement = document.getElementById("myElement");

 // Add a "mouseover" event listener to the element
 myElement.addEventListener("mouseover", function() {
   // Display an alert message when the mouse moves over the element
   alert("Mouseover event triggered!");  });

//    CHP 49 & 50

// Q1
 // Get a reference to the input element and button element
 const userInput = document.getElementById("userInput");
 const printButton = document.getElementById("printButton");

 // Add a click event listener to the button
 printButton.addEventListener("click", function() {
   // Read the value of the input element and print it to the console
   const inputValue = userInput.value;
   console.log("User Input:", inputValue);
 });

//  Q2
 // Get a reference to the checkbox element and the button element
 const myCheckbox = document.getElementById("myCheckbox");
 const printtButton = document.getElementById("printButton");

 // Add a click event listener to the button
 printButton.addEventListener("click", function() {
   // Read the value of the checkbox and print it to the console
   const isChecked = myCheckbox.checked;
   console.log("Checkbox Value:", isChecked);
 });

//  Q4
// Create a new text field element
const textField = document.createElement("div");

// Set the text content of the field
textField.textContent = "This is some text in the field.";

// Assign an ID to the field
textField.id = "myTextField";

// Append the field to a container element
const container = document.getElementById("container");
container.appendChild(textField);


  




