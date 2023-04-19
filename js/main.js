// navbar
const menuBtn = document.querySelector('.menu-btn');
const burger = document.querySelector('.burger');
const header = document.querySelector('header');
const menuNav = document.querySelector('.menu-navbar');
let displayMenu = false;

function toggleMenu() {
  if (!displayMenu) {
    burger.classList.add('open');
    header.classList.add('open');
    header.classList.add('open');
    menuNav.classList.add('open');
    displayMenu = true;
  } else {
    burger.classList.remove('open');
    header.classList.remove('open');
    menuNav.classList.remove('open');
    displayMenu = false;
  }
}

menuBtn.addEventListener('click', toggleMenu);

// feature speakers

const speakers = [
  {
    id: '01',
    name: 'Yochai Benkler',
    title: 'Lorem ipsum dolor sit amet.',
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, nisi esse.',
    img: 'assets/img1.jpg',
  },
  {
    id: '02',
    name: 'Yochai Benkler',
    title: 'Lorem ipsum dolor sit amet.',
    paragraph: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, nisi esse.',
    img: 'assets/img2.jpg',
  },
];

const featureSpeaker = document.querySelector('.featured-speakers__container');

function createSpeaker(speaker) {
  const section = `
    <li class="featured-speakers__list">
        <div class="list-img">
            <img src="${speaker.img}" alt="${speaker.id}" class="featured-speakers__img">
        </div>
        <div class="list-desc">
            <h2>${speaker.name}</h2>
            <h3><em>
                ${speaker.title}
            </em></h3>
            <span class="list-desc__line"></span>
            <p>${speaker.paragraph}</p>
        </div>
    </li>`;
  return section;
}

for (let i = 0; i < speakers.length; i += 1) {
  const speaker = createSpeaker(speakers[i]);
  featureSpeaker.innerHTML += speaker;
}