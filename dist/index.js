function openNav(elId) {
  const nav = document.getElementById(elId);

  nav.classList.toggle('visible');
}


const openNavButton = document.getElementById('button-open-nav');
openNavButton.addEventListener('click', () => {
  openNav('nav');
});