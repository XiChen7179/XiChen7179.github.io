const BACKEND_URL = "https://xichen7179-github-io.onrender.com";
window.addEventListener('DOMContentLoaded', submit_form);

function showAlert(message) {
  document.getElementById('alert-message').textContent = message;
  document.getElementById('custom-alert').classList.remove('hidden');
}

function closeAlert() {
  document.getElementById('custom-alert').classList.add('hidden');
}

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

function submit_form() {
  document.getElementById('collabForm').addEventListener('submit', async (e) => {
    e.preventDefault();
  
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
  
    const res = await fetch(`${BACKEND_URL}/submit-form`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
  
    if (res.ok) {
      showAlert('Thanks for reaching out!');
      e.target.reset();
    } else {
      showAlert('Something went wrong. You should try again a moment later.');
    }
  });
}

