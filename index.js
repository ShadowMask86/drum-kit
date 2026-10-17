const buttons = document.querySelectorAll(".drum");

// Detect mouse clicks on the drum buttons.

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {

        // Get the drum key displayed on the clicked button.
        let btnInnerHtml = this.innerHTML;

        // Play the corresponding drum sound and animate the button.
        makeSound(btnInnerHtml);
        buttonAnimation(btnInnerHtml);
    });
} 

// Detecting Keyboard Presses.
document.addEventListener("keydown", function(event) {

    // Allow only the keys assigned to the drum kit.
    const drumKeys = ["w", "a", "s", "d", "j", "k", "l"];

    // Ignore keys that do not belong to the drum kit.
    if (!drumKeys.includes(event.key.toLowerCase())){
        return;
    }

    // Normalize the pressed key to lowercase.
    const pressedKey = event.key.toLowerCase();

    // Play the corresponding sound and animate the button.
    makeSound(pressedKey);
    buttonAnimation(pressedKey);
});

// Play the drum sound associated with the given key.
function makeSound(key){

    //Map each drum key to its audio file.
    const sounds = {
        w: "sounds/tom-1.mp3",
        a: "sounds/tom-2.mp3",
        s: "sounds/tom-3.mp3",
        d: "sounds/tom-4.mp3",
        j: "sounds/snare.mp3",
        k: "sounds/crash.mp3",
        l: "sounds/kick-bass.mp3",
    }

    // Find the audio file for the pressed key.
    const soundFile = sounds[key];

    // Stop if the key has no matching sound.
    if (!soundFile) return;

    // Create and play the audio.
    new Audio(soundFile).play();
}

// Add a visual animation to the corresponding drum button.
function buttonAnimation(currentKey) {

    // Find the button associated with the pressed key.
    let activeButton = document.querySelector("." + currentKey);

    // Stop if no matching button exists.
    if (!activeButton) return;

    // Apply the pressed animation class.
    activeButton.classList.add("pressed");

    // Remove the animation class after 100 milliseconds.
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}