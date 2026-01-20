const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
});

reveals.forEach(el => observer.observe(el));

document.querySelectorAll(".product-card").forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.classList.add("active");
  });

  card.addEventListener("mouseleave", () => {
    card.classList.remove("active");
  });

  card.addEventListener("focus", () => {
    card.classList.add("active");
  });

  card.addEventListener("blur", () => {
    card.classList.remove("active");
  });
});


card.addEventListener("focus", () => card.classList.add("active"));
card.addEventListener("blur", () => card.classList.remove("active"));
