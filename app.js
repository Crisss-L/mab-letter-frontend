const API = "https://mab-letter-backend.onrender.com";

// Registrar usuario
async function registrar() {
  const username = document.getElementById("reg-user").value;
  const password = document.getElementById("reg-pass").value;

  await fetch(`${API}/api/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });

  alert("Usuario registrado");
}

// Publicar tweet
async function publicar() {
  const username = document.getElementById("reg-user").value;
  const text = document.getElementById("tweet").value;

  await fetch(`${API}/api/post`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, text })
  });

  document.getElementById("tweet").value = "";
  cargar();
}

// Cargar timeline
async function cargar() {
  const res = await fetch(`${API}/api/posts`);
  const posts = await res.json();

  const timeline = document.getElementById("timeline");
  timeline.innerHTML = posts
    .map(p => `<p><b>${p.username}</b>: ${p.text}</p>`)
    .join("");
}

cargar();
