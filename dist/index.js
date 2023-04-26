function openNav(elId) {
  const nav = document.getElementById(elId);

  nav.setAttribute('open', '');
}

function closeNav(elId) {
  const nav = document.getElementById(elId);

  nav.removeAttribute('open');
}

function toggleNav(elId) {
  const nav = document.getElementById(elId);

  if (nav.getAttribute('open') !== null) {
    closeNav(elId);
  }
  else if (nav.getAttribute('open') === null) {
    openNav(elId);
  }
}


const openNavButton = document.getElementById('button-open-nav');
openNavButton.addEventListener('click', () => {
  toggleNav('nav');
});

const openInteriorNavButton = document.getElementById('button-open-add-task');
openInteriorNavButton.addEventListener('click', (e) => {
  toggleNav('add-task');
  e.currentTarget.classList.toggle('rotate');
});