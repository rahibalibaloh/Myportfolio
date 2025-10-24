// Theme toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("themeToggle");
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
  });

  // Remove main curtains after animation
  setTimeout(() => {
    document.querySelectorAll(".curtain").forEach(c => (c.style.display = "none"));
  }, 2400);
});

// Active button effect
const buttons = document.querySelectorAll(".nav-btn");
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});
