import challenges from '../data.js';

const ul = document.querySelector('ul');

challenges.forEach(challenge => {
    const li = document.createElement('li');
    const link = document.createElement('a');

    li.appendChild(link);

    link.textContent = challenge.title;
    link.href = `/challenge/?id=${challenge.id}`;

    ul.append(li);
});