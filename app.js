// import functions and grab DOM elements
import { saveUser } from './storage-utils.js';

const form = document.querySelector('form');

// initialize state

// set event listeners to update state and DOM
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);

    saveUser({
        name: data.get('name'),
        color: data.get('class'),
        candy: 0,
        friendship: 0,
        completed: {}
        
    });
});