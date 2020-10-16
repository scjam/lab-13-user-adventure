// import functions and grab DOM elements
import { saveUser, getUser } from './storage-utils.js';

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);

    saveUser({
        name: data.get('name'),
        color: data.get('color'),
        candy: 0,
        friendship: 0,
        completed: {}

    });

    window.location.href = './map/';
});

function profile() {
    const name = document.getElementById('name');
    const candy = document.getElementById('candy');
    const friendship = document.getElementById('friendship');

    const user = getUser();

    if (!user) {
        window.location = './';
    }

    name.textContent = user.name;
    candy.textContent = user.candy;
    friendship.textContent = user.friendship;
}

export default profile;