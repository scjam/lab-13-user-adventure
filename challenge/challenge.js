import challenges from '../data.js';
import { findById } from '../utils.js';

const searchParams = new URLSearchParams(window.location.search);

const id = searchParams.get('id');

const challenge = findById(challenges, id);

console.log(challenge);