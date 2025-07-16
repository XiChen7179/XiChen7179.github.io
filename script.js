function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function showRole(role) {
  const roles = ['recruiter', 'collaborator', 'learner'];
  roles.forEach(r => {
    document.getElementById(r).style.display = (r === role) ? 'block' : 'none';
  });
}
