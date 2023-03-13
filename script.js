

const switcher = document.getElementById('switch');
const body = document.body;
const header = document.querySelector('header');
const main = document.querySelector('main');

switcher.addEventListener('change', () => {
  if (switcher.checked) {
    body.classList.add('dark-mode');
    header.classList.add('dark-mode');
    main.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
    header.classList.remove('dark-mode');
    main.classList.remove('dark-mode');
  }
});
