//import challenges from '../data.js';
//import { getUser } from '../storage-utils.js';

//const ul = document.querySelector('ul');

// challenges.forEach(challenge => {
//     const li = document.createElement('li');
//     const link = document.createElement('a');

//     li.appendChild(link);

//     link.textContent = challenge.title;
//     link.href = `../challenge/?id=${challenge.id}`;

//     ul.append(li);
// });

function createLink(challenge) {
    const link = document.createElement('a');
    link.classList.add('challenge');

    link.href = '../challenge/?id=' + challenge.id;

    link.style.top = challenge.map.top;
    link.style.left = challenge.map.left;
    link.textContent = challenge.title;

    return link;
}

export default createLink;