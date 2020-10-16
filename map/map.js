import challenges from '../data.js';
import { getUser } from '../storage-utils.js';

//const ul = document.querySelector('ul');

// challenges.forEach(challenge => {
//     const li = document.createElement('li');
//     const link = document.createElement('a');

//     li.appendChild(link);

//     link.textContent = challenge.title;
//     link.href = `../challenge/?id=${challenge.id}`;

//     ul.append(li);
// });
profile();
const user = getUser();
const nav = document.getElementById('challenges');

for (let i = 0; i < challenges.length; i++) {
    const challenge = challenges[i];
    let challengeDisplay = null;
    if (user.completed[challenge.id]) {
        challengeDisplay = completedChallenge(challenge);
    } else {
        challengeDisplay = createLink(challenge);
    }
    nav.appendChild(challengeDisplay);
}

function createLink(challenge) {
    const link = document.createElement('a');
    link.classList.add('challenge');

    link.href = '../challenge/?id=' + challenge.id;

    link.style.top = challenge.map.top;
    link.style.left = challenge.map.left;
    link.textContent = challenge.title;

    return link;
}

function completedChallenge(challenge) {
    const span = document.createElement('span');
    span.classList.add('challenge');
    span.classList.add('completed');

    span.style.top = challenge.map.top;
    span.style.left = challenge.map.left;

    span.textContent = challenge.title;
    return span;

}

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