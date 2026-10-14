const buttons = document.querySelectorAll(".drum");

// Detecting button Press

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {

        let btnInnerHtml = this.innerHTML;

        makeSound(btnInnerHtml);

        buttonAnimation(btnInnerHtml);
    });
} 

// Detecting Keyboard Press

document.addEventListener("keydown", function(event) {

    const drumKeys = ["w", "a", "s", "d", "j", "k", "l"];

    if (!drumKeys.includes(event.key.toLowerCase())){
        return;
    }

    const pressedKey = event.key.toLowerCase();

    makeSound(pressedKey);

    buttonAnimation(pressedKey);
});

function makeSound(key){

    const sounds = {
        w: "sounds/tom-1.mp3",
        a: "sounds/tom-2.mp3",
        s: "sounds/tom-3.mp3",
        d: "sounds/tom-4.mp3",
        j: "sounds/snare.mp3",
        k: "sounds/crash.mp3",
        l: "sounds/kick-bass.mp3",
    }

    const soundFile = sounds[key];

    if (!soundFile) return;

    new Audio(soundFile).play();
}

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);

    if (!activeButton) return;

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}