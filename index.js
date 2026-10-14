//My code:-

// const buttons = document.querySelectorAll("button");

// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener("click", function() {alert("A button is clicked");
//     }); 
// }

//Angela's Code:-

// var numberOfDrumButtons = document.querySelectorAll(".drum").length;

// for (let i = 0; i < numberOfDrumButtons; i++) {
//     document.querySelectorAll("button")[i].addEventListener("click", function() {alert("A button is clicked");
//     }); 
// }

// Chatgpt's code:-

// buttons.forEach(function(button) {
//     button.addEventListener("click", function() {
//         alert("A button is clicked");
//     });
// });

// Combination of Angela's, My and AI Code (Optimized Code):-

const buttons = document.querySelectorAll(".drum");

// Detecting button Press

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        // const audio = new Audio("sounds/tom-1.mp3");
        // audio.play();

        // this.style.color = "white";

        // let audio = new Audio();
        // audio.play();

        let btnInnerHtml = this.innerHTML;

        makeSound(btnInnerHtml);

        buttonAnimation(btnInnerHtml);
    });
} 

// Detecting Keyboard Press

document.addEventListener("keydown", function(event) {
    makeSound(event.key);

        buttonAnimation(event.key);
});

// document.addEventListener("keydown", function() {
//     alert("Keyboard key is pressed.");
// });

function makeSound(key){

    switch (key) {
        case "w":
            let tom1 = new Audio("sounds/tom-1.mp3").play();
            break;

        case "a":
            let tom2 = new Audio("sounds/tom-2.mp3").play();
            break;

        case "s":
            let tom3 = new Audio("sounds/tom-3.mp3").play();
            break;

        case "d":
            let tom4 = new Audio("sounds/tom-4.mp3").play();
            break;

        case "j":
            let snare = new Audio("sounds/snare.mp3").play();
            break;

        case "k":
            let crash = new Audio("sounds/crash.mp3").play();
            break;

        case "l":
            let kick = new Audio("sounds/kick-bass.mp3").play();
            break;
        
        default:
            console.log(key);
            break;
        }
}

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}

// What is setTimeout()?

// setTimeout() tells JavaScript: “Wait for a certain amount of time, then run this function once.”

// Basic syntax:-
// setTimeout(functionToRun, delay);

// The delay is measured in milliseconds.

// setTimeout(function () {
// console.log("Hello!");
// }, 2000);

// What happens:-
// Code reaches setTimeout()
//         ↓
// Wait approximately 2 seconds
//         ↓
// Run the callback function
//         ↓
// Print "Hello!"