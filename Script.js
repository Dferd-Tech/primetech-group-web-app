// ===== Navigation Menu Toggle =====
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// ===== FAQ Expand/Collapse =====
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
  item.addEventListener("click", () => {
    item.classList.toggle("open");

    const answer = item.querySelector(".answer");
    if (item.classList.contains("open")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = "0";
    } 
  });
});

// ===== Contact Form Validation =====
const form = document.querySelector("#contactForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.querySelector("#name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const message = document.querySelector("#message").value.trim();

  if (name === "" || email === "" || message === "") {
    alert("⚠️ Please fill in all fields before submitting.");
    return;
  }

  if (!validateEmail(email)) {
    alert("⚠️ Please enter a valid email address.");
    return;
  }

  // If everything is valid
  alert("✅ Thank you! Your message has been sent.");
  form.reset();
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

