import challenges from '../data.js';
import { getUser, saveUser } from '../storage-utils.js';
import { findById } from '../utils.js';

const section = document.querySelector('section');
const div = document.createElement('div');
const searchParams = new URLSearchParams(window.location.search);
const id = searchParams.get('id');
const challenge = findById(challenges, id);
const h2 = document.createElement('h2');

h2.textContent = challenge.title;
section.appendChild(h2);

div.textContent = challenge.description;
section.appendChild(div);

const form = document.createElement('form');
section.appendChild(form);

challenge.choices.forEach(choice => {
    const label = document.createElement('label');
    const span = document.createElement('span');

    span.textContent = choice.description;

    const radio = document.createElement('input');
    radio.type = 'radio';
    radio.value = choice.id;
    radio.name = 'choices';

    label.append(radio, span);
    
    form.appendChild(label);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    //const checked = document.querySelectorAll(':checked');
});

const button = document.createElement('button');

button.textContent = 'Confirm';

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const checked = document.querySelector(':checked');
    const selection = checked.value;
    const choice = findById(challenge.choices, selection);
    console.log(choice);

    const user = getUser();

    user.candy += choice.candy;
    user.friendship += choice.friendship;
    console.log(user);

    saveUser(user);
});

form.appendChild(button);