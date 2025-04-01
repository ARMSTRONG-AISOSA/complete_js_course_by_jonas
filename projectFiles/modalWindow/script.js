'use strict';

// Variables
const showModalBtn = document.querySelectorAll('.show-modal'); // Treat all the classes being selected as an array (for a for loop)
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

// Functions

// Show Modal
const showModal = function () {
    modal.classList.remove('hidden'); // Display Modal
    overlay.classList.remove('hidden'); // Display Overlay
};

// Hide Modal
const hideModal = function () {
    modal.classList.add('hidden'); // Display Modal
    overlay.classList.add('hidden'); // Display Overlay
};


for (let i = 0; i < showModalBtn.length; i++) {

    // console.log(showModalBtn[i]); // Display Html element
    // console.log(showModalBtn[i].textContent); // Display Btn text

    // An Event Handler === Event Listener
    // The func in the event listener while a func exp., it is also an anonymous func.

    showModalBtn[i].addEventListener('click', function () {
        // console.log(`Btn Clicked ${showModalBtn[i].textContent}`); // Show Btn Clicked

        showModal(); // Make Modal Visible
    })
};

// Close Modal Btn
closeModalBtn.addEventListener('click', hideModal);

// Close Modal Overlay
overlay.addEventListener('click', hideModal);

// ======== 081 Handling an _Esc_ Keypress Event
document.addEventListener('keydown', function (e) {
    // console.log(e); // Obj gen by Js
    console.log('The key presses was:', e.key); // Print the Obj property

    if ( e.key === "Escape" && !modal.classList.contains('hidden') ) {
            hideModal(); //Close Modal 
        
    }
});

// Each time a key is hit, a "keydown event" is generated the info on which key was pressed would be stored in an event. JS would generates an object we can access in the event handler.


// Notes

// When you write it as overlay.addEventListener('click', hideModal());, the hideModal() function is immediately invoked as the code executes rather than waiting for the click event on overlay.

// In addEventListener, the second argument should be a function reference, not the result of a function call. 

// If you want to pass arguments to hideModal in this scenario, you’d need to wrap it in an anonymous function:
// overlay.addEventListener('click', () => hideModal());

// Keyboard Event are called global events
// They are 3 types of keyboard event;
// 'keyup': happens after we lift our fingers off the key.
// 'keypress': fired continually as long as the key is being pressed.
// 'keydown': fires as soon as we press the key
